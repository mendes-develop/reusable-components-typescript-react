import {UserTypes, User} from './types'

export function setUser(user: User){
    return {type: UserTypes.SET_USER, payload: user}
}

export function logout(){
    return {type: UserTypes.SET_USER}
}