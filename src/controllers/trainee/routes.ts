// create a routes.ts file
import { Router } from "express";
import TraineeController from "./Controller";
import validationHandler from '../../libs/validationHandler';
import validation from './validation';
import { authMiddlware } from '../../libs/routes';
const traineeRouter = Router();

traineeRouter.route('/')
    .get(authMiddlware('getUser','read'),validationHandler(validation.get), TraineeController.get)
    .post(authMiddlware('getUser','read'),validationHandler(validation.create), TraineeController.create)
    .put(authMiddlware('getUser','read'),validationHandler(validation.update), TraineeController.update)
    .delete(authMiddlware('getUser','read'),validationHandler(validation.delete), TraineeController.delete);

export default traineeRouter;
