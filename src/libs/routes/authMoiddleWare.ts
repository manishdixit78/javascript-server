import * as jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { hasPermission } from "../../libs/permissions";
import IRequest from "../IRequest";
import UserRepository from "../../repositories/user/UserRepository";
import config from "../../config/configuration";
import { permissions } from "../../libs/constants";

export default (moduleName: string, permissionType: string) => (req: IRequest, res: Response, next: NextFunction) => {
    try {

        console.log("::::::::::::INSIDE AUTHMIDDLEWARE::::::::::::");
        const token = req.headers['authorization'];
        console.log('recieved token :', token)
        const secret = config.secretKey;
        async function verifyUser() {
            const decodeUser = await jwt.verify(token, secret);
            return decodeUser;
        }

        verifyUser().then((result) => {
            console.log('result is :', result);
            if (result) {
                const role = result.result.role;
                console.log("role is ", role)
                const userRepository: UserRepository = new UserRepository();
                userRepository.find({ email: result['email'], originalId: result['id'], deletedAt: null })
                    .then((result1) => {
                        if (!result1) {

                            console.log("user does not exist ");
                            res.send({
                                status: 404,
                                message: "user does not exist",
                                data: result1
                            });
                        }
                        else {
                            if (hasPermission(permissions.getUsers, role, permissionType)) {
                                console.log(`${role} has permission ${permissionType} :true`);
                                req.user = result.result;
                                next(); 
                            }
                            else {
                                next({
                                    status: res.status(403),
                                    error: "Unauthorized",
                                    message: "Permission denied",
                                });
                            }
                        }
                    })
                    .catch((err) => { console.log(err) });
            }
            else {
                next({
                    status: 403,
                    error: "Token expired",
                    message: "Permission denied",
                });
            }
        })
            .catch((err) => {
                next({
                    status: res.status(403),
                    error: "Token expire",
                    message: "Permission denied",
                });
            })
    }

    catch (err) {
        next({
            error: "Unauthorized",
            code: 403
        })
    }
}





/* token for authorization

eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2MDUwNDgzNjAsImV4cCI6MTYzNjU4NDM2MCwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIm5hbWUiOiJUcmFpbmVlIiwiZW1haWwiOiJ0cmFpbmVlQHN1Y2Nlc3NpdmUudGVjaCIsInJvbGUiOiJ0cmFpbmVlIn0.Qr36ZP6eqgsqUDPrskAmz56-br4yz21mYk0sqKdyr3o

*/
