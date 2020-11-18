// create a routes.ts file
import { Router } from "express";
import UserController from "./Controller";
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import authMoiddleWare from "../../libs/routes/authMoiddleWare";

const UserRouter = Router();

UserRouter.route('/me')
    .get(authMoiddleWare('getUser', 'read'),validationHandler(validation.get), UserController.me);

UserRouter.route('/login')
    .post(authMoiddleWare('getUser','read'),validationHandler(validation.create),UserController.login);



export default UserRouter;