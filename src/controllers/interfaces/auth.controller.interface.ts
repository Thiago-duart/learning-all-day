import { IHttpRequest, IHttpResponse } from "./http.interface";

export interface IAuth {
    singUp(httpRequest:IHttpRequest):Promise<IHttpResponse>
}