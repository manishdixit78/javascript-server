//import the server and config files
import Server from './Server';
import config from './config/configuration';
console.log("config is " , config);
const server=new Server( config );
server.bootstrap().run();
server.initSwagger();

/*                Task
Create a method initBodyParser in Server.ts file
This will implement the body parser for the express app.
Please refer the URL for documentation(https://www.npmjs.com/package/body-parser#examples)
Call this method from the bootstrap method of the same class.

Create folder routes inside libs

Create a file notFoundRoute.ts
Create a middleware which will return error 'Not Found'.

Create a file errorHandler.ts
Create a middleware which returns an error in the following format:
{
error: "Not Found",
message: "error",
status: 500,
timestamp: "2019-01-08T17:38:21.929Z"
}
*/