import { authconstants } from "../action/constants"

const initialState ={
    name:'mehr'
}
export default (state=initialState,action)=>{
    console.log(action);
    switch(action.type){
        case authconstants.LOGIN_REQUEST:
            state={
                ...state,
                ...action.payload
            }
            break;
    }
    return state;
}