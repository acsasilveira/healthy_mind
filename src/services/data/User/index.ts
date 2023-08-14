import { IResponseUser, IUser } from "interfaces/user.interface";
import api from "services/api";

class UserData {
    register(data: IUser) {
        return api.post<IResponseUser>('/register', data)
    }
    login(data: IUser) {
        return api.post<IResponseUser>('/login', data)
    }
}

export default new UserData()