import { Request } from "express";

interface IRequest extends Request {
    body: any,
    param: any,
    query: any,
    user: any,
    headers: any
}

export default IRequest;