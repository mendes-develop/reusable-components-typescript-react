export enum UserTypes {
    SET_USER = "SET_USER",
    LOGOUT_USER = "LOGOUT"   
}

export interface User {
    username: string,
    id: string,
    token: string
}

export interface UserAction {
    type: UserTypes,
    payload: User
}

export interface UserState {
    username: string,
    id: string,
    token: string,
    userLogged: boolean,
    loading: boolean
}

