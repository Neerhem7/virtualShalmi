import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
// const initialState = {
//   sidebarShow: 'responsive',
//   name: 'mer'
// }

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case 'set':
//       return {...state, ...rest }
//     default:
//       return state
//   }
// }

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store