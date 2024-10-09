export interface IUser {
    id:string,
    name:string,
    email:string,
    password:string,
    role:string
    createdAt:Date,
    updatedAt:Date
}
export type IUserSingUp = Omit<IUser, 'id' | 'createdAt' | 'updatedAt'>
export type IUserSingIn = Omit<IUser, 'id' | 'createdAt' | 'updatedAt' | 'role'>