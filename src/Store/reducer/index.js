import {combineReducers} from 'redux';
import todoReducer from './todoReducer';
import signupReducer from "./signupReducer"

const rootReducer = combineReducers({
    todo : todoReducer,
    signup : signupReducer
})

export default rootReducer;