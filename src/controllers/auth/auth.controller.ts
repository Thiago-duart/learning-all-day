import { IAuth } from "../interfaces/auth.controller.interface";
import { IHttpRequest, IHttpResponse } from "../interfaces/http.interface";

export class AuthController implements IAuth{
    async singUp(httpRequest: IHttpRequest): Promise<IHttpResponse> {
        return {body:'The email field is mandatory and was not provided.',statusCode:400}
    }
}