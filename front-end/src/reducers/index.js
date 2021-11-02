import { combineReducers } from "redux";
import authReducers from "./auth-reducers";
 
const rootreducer =combineReducers({
    auth: authReducers
})
export default rootreducer;