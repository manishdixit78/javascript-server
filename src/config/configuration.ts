//import the Iconfig interface and config
const envVars=require('dotenv').config()

console.log("Inside config: ",envVars);


const config:IConfig= envVars;
Object.freeze(config);
export default config;
import {IConfig} from './IConfig';