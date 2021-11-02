import { authConstants } from "../action/constants"

const initailstate ={
    name: "mer"
}
export default (state = initailstate, action)=>{
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state={
                ...state,
                ...action.payload
            }
        break;
    }
    return state;
}