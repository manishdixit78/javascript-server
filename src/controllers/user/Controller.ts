import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import * as bcrypt from 'bcrypt';
import config from '../../config/configuration';
import { userModel } from "../../repositories/user/UserModel";
class UserController {
    static instance: UserController;
    static getInstance() {
        if (UserController.instance) {
            return UserController.instance; 
        }
        UserController.instance = new UserController();
        return UserController.instance;
    }
    me(req: any, res: Response, next: NextFunction) {
        const { user } = req;
        return res.status(200).send({ message: 'Me', status: 'ok', data: user });
    }
    login = (req: Request, res: Response, next: NextFunction) => {

        try {

            const { email, password } = req.body;
            console.log(email);
            userModel.findOne({ email: email }, (err, result) => {
                if (result) {
                    if (bcrypt.compareSync(password,result.password)) {

                        const token = jwt.sign({ result }, config.secretKey, {
                            expiresIn: '1d'
                        });
                        console.log(result);
                        console.log(token);
                        res.send({
                            data: token,
                            message: 'Login successfully',
                            status: 200
                        });
                    }
                    else {
                        res.send({
                            status: 400,
                            message: 'Password Doesnt Match',
                        });
                    }
                }
                else {
                    res.send({
                        status: 404,
                        message: 'Email is not Registered',
                    });
                }
            });
        }
        catch (err) {
            res.send(err);
        }
    }
}
export default UserController.getInstance();

