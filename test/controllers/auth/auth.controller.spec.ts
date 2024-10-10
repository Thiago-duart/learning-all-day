import { AuthController } from "../../../src/controllers/auth/auth.controller"
import { IUserSingUp } from "../../../src/domain/models/user.models"

describe('src/controllers/auth/auth.controllers.ts',()=>{
    const makeSut =()=>{
        const AuthStub = new AuthController()
        return {AuthStub}
    }
test('testReceiveNameString_invalidEmail_returns400',async()=>{
    const singUpData = {body:{
        email:'invalid-email',
        password:'valid-password'
    }}
    const {AuthStub} = makeSut()
    const response = await AuthStub.singUp(singUpData)
    expect(response).toEqual({statusCode:400,body:'The email field is mandatory and was not provided.'})
})
})  