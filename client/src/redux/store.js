import {createStore ,combineReducers, applyMiddleware} from 'redux'
import user from './reducers/userReducer'
// import {} from './middleWares/middleWare'

const reducer = combineReducers({user})
const store = createStore(reducer,(applyMiddleware()))

window.store= store;
export default store;