import {api} from "../../api";

export interface IRegister {
    name?: string
    email?: string
    telefone?: string
    genero?: string
    aniversario?: string
    password?: string
}

export interface IAuthenticate {
    email?: string
    password?: string
}

export interface IUser {
    token: any;
    id: number
    name: string
    email: string
    telefone: string
    genero: string
    aniversario: string
}

export interface IUserLogin {
    user: IUser
    token: {
        token: string
        expires_at: string
    }
}

class UserData {
    register(data: IRegister){
        return api.post<IUser>('/register', data);
    }
    login(data: IAuthenticate){
        return api.post<IUserLogin>('/login', data);
    }
    updateToken(token: string){
        return api.put('/user', { token });
    }
}

export default new UserData()