import React, {
    createContext, useCallback, useState, useEffect, ReactNode
} from "react";
import {apiUser} from "../services/data"
import {api} from "../services/api"
import AsyncStorage from "@react-native-async-storage/async-storage";
import {IAuthenticate, IUserLogin} from "../services/data/User"
import {isAfter, parse, parseISO} from "date-fns"

export interface IAuthContextData {
    signIn(credentials: IAuthenticate): Promise<void>
    signOut(): Promise<void>
    user?: IUserLogin
}

export interface IProvider {
    children?: ReactNode
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);
const AuthProvider = ({children}:IProvider) => {
    const [auth, setAuth] = useState<IUserLogin>({} as IUserLogin);

    const signIn = useCallback(async ({email,password}: IAuthenticate) => {
        const response = await apiUser.login({
            email,
            password,
        });
        const user = response.data;
        api.defaults.headers.common.Authorization = `Bearer ${user.token.token}`;
        setAuth({ ...user });
        await AsyncStorage.setItem("user", JSON.stringify(user))
    },[]);

    const removeLocalStorage = async () => {
        await AsyncStorage.removeItem("user");
    };

    const signOut = useCallback(async () => {
        setAuth({} as IUserLogin);
        removeLocalStorage();
        delete api.defaults.headers.common.Authorization
    },[]);

    const loadUserStorageData = useCallback(async () => {
        const user = await AsyncStorage.getItem("user");
        if(user){
            const userParse = JSON.parse(user) as IUserLogin
            if(isAfter(parseISO(userParse.token.expires_at), new Date())) {
                api.defaults.headers.common.Authorization = `Bearer ${userParse.token.token}`;
                setAuth(userParse)
            } else {
                await removeLocalStorage()
            }
        }
    },[]);

    useEffect(() => {
        loadUserStorageData();
    }, [])

    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                user: auth
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext};

