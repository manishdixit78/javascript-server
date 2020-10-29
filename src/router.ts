import { Router } from 'express'
import { traineeRouter } from './controllers';

const mainRouter = Router();

mainRouter.use('./trainee', traineeRouter);

export default mainRouter;


/*        Task For #39522

Create a folder controllers inside src
Create folder user and trainee inside controllers.
Create following files in both folder
Controller.ts
routes.ts
index.ts

Define following routes in the trainee
get - /
post - /
put - /
delete - /

Define a class in Controller file having a method for each route returning some fake response.
Create a router.ts file in the root of src directory and import all the created routes and export them.
Import the router to the server file from router.ts file and use them in setUpRoutes method with /api prefix.
*/
