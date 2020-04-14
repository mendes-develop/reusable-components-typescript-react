import {UserTypes, UserAction} from './types'

interface State {
    username: string,
    token: string,
    id: string,
    userLogged: boolean,
    loading: boolean
}

let initialState: State = {
    username: "",
    token: "",
    id: "",
    userLogged: false,
    loading: false
}



export default function reducer(state = initialState, action: UserAction):State{
    switch(action.type){
        case UserTypes.SET_USER :
            return {
                username: action.payload.username,
                token: action.payload.token,
                id: action.payload.id,
                userLogged: true,
                loading: false
            }
        case UserTypes.LOGOUT_USER :
            return {
                username: "",
                token: "",
                id: "",
                userLogged: false,
                loading: false
            }
        default: return state
    }
} 