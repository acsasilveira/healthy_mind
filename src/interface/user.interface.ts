import { ReactNode } from "react"
export interface IUser {
    nome?: string
    telefone?: string
    genero?: string
    aniversario?: string
    email?: string
    password?: string
}
export interface IResponseUser {
    user: {
        id: number
        nome: string
        email: string
        telefone: string
        genero: string
        aniversario: string
    }
    token: {
        token: string
        expires_at: string
    }
}

export interface IAuthContextData {
    signIn(credentials: IUser): Promise<void>
    signOut(): Promise<void>
    loadUserStorageData(): Promise<boolean>
    user: {
        id: number
        nome: string
        email: string
        telefone: string
        genero: string
        aniversario: string
    }
}

export interface IAuthProvider {
    children?: ReactNode
}
export interface IErrorResponse {
    status: string
    message: string
    errors?: {
        message: string
    } []
}