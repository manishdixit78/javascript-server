/*    
Define .env file with following properties:
PORT=9000
NODE_ENV=dev
Create a folder src
Create a file Server.ts inside src
Define a class with the following methods and properties:

- config: property, It will be set by constructor from parameter received.
- bootstrap: call different methods needed for bootstrapping of app.
It will call setupRoutes for now.
It will return this.
- setupRoutes: Method to setup routes
We will define a route(of type get) '/health-check' which will return 'I am OK' as response.
- run: Method to run the express app.
Log error in case of error
Log success message in case of success.
It will return this.
Export Server class.

Create a folder config inside src
- Create a file IConfig.ts which contains interface of config (properties like port and env)
- Create a file configuration.ts
Use dotenv module for extracting config from .env file.
Define config using interface(IConfig).
Use Object.freeze for protecting config object against any modifications after the declaration.
Export config.


Create a file index.ts
Import config and Server.
Create an instance of Server by passing config in constructor
Call methods bootstrap and run using instance
App should be running and success message.
*/


//import config and server
import config from './config/configuration';
import Server from './Server';

console.log("config is",config);

const server= new Server(config.parsed);

server.bootstrap().run();