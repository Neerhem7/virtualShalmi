import { authconstants } from "./constants"

export const login = (user)=>{
    console.log(user);
    return (dispatch)=>{
        dispatch({
            type : authconstants.LOGIN_REQUEST,
            payload: {
                ...user
            }
        })
    }
}