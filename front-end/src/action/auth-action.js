import axios from "axios"
import { authConstants } from "./constants"

export const login = (user)=>{
    return async (dispatch)=>{
        const res = await axios.post('/vendorsignin',{
            ...user
        })
        dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload:{
                ...user
            }
        })
    }
}