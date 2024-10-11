import { IAuth } from "../interfaces/auth.controller.interface";
import { IHttpRequest, IHttpResponse } from "../interfaces/http.interface";

export class AuthController implements IAuth{
    async singUp(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        const varifyData = ['name','email','password']
        for (let i = 0; i < varifyData.length; i++) {
            if(!httpRequest.body.hasOwnProperty(varifyData[i])){
                return {body:`The ${varifyData[i]} field is mandatory and was not provided.`,statusCode:400}
            }
        }
        return {body:'valid-return',statusCode:200}
    }
}