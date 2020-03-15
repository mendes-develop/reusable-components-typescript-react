const URL = "http://localhost:3030/"

interface IUserPayload {
    user_id: string;
    username: string;
}

export interface IUserData {
    userData: { token: string, user: IUserPayload } 
}

interface ILoginError {
    error: string
}


interface IRegisterErrors {
    errors: string[]
}

const logUser = async (email:string, password:string):Promise<IUserData | ILoginError | void>  =>  {

    return (
        fetch(`${URL}users/login`, {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(resp=> resp.json())
        .then(resp => resp)
        .catch(error => console.log(`Network fail request: ${error}`))
    )

}

const registerUser = async  (username:string, email:string, password:string, password_confirmation:string):Promise<IUserData | IRegisterErrors | void> => {

    return (
        fetch(`${URL}users/register`, {
            method: "POST",
            headers: {
                "Content-Type" : 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                password,
                password_confirmation
            })
        })
        .then(resp=> resp.json())
        .then(resp => resp)
        .catch(error => console.log(`Network fail request: ${error}`))
    )
    
}

export {
    logUser,
    registerUser,
    
}