import { AuthController } from "../../../src/controllers/auth/auth.controller"

describe('src/controllers/auth/auth.controllers.ts',()=>{

    const makeSut =()=>{
        const AuthStub = new AuthController()
        return {AuthStub}
    }

test('testReceiveName_nameNotFound_returns400',async()=>{
    const singUpData = {body:{
        email:'invalid-email',
        password:'valid-password'
    }}
    const {AuthStub} = makeSut()
    const response = await AuthStub.singUp(singUpData)
    expect(response).toEqual({statusCode:400,body:'The name field is mandatory and was not provided.'})
})
test('testReceiveEmail_emailNotFound_returns400',async()=>{
    const singUpData = {body:{
        name:'valid-name',
        password:'valid-password'
    }}
    const {AuthStub} = makeSut()
    const response = await AuthStub.singUp(singUpData)
    expect(response).toEqual({statusCode:400,body:'The email field is mandatory and was not provided.'})
})
})  