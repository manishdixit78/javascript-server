//define a interface
interface IConfig {
    PORT : number;
    NODE_ENV : String;
    MONGO_URL: string;
    password : string;
    secretKey : string;
    }
    export { IConfig };