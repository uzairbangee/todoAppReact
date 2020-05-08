import ActionTypes from '../action/ActionTypes';

const signupInitialState = {
    user : "",
    errorMessage : "",
    loading : false,
    error: "",
    authenticated : false
}

const signupReducer = (state=signupInitialState, action) => {
    switch(action.type){
        case ActionTypes.USER_SIGNUP:
            return {
                ...state,
                loading: true, 
            }
        case ActionTypes.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                loading: false,
                user : action.data.username,
                authenticated : true,
                error: ""
            }
        case ActionTypes.USER_SIGNUP_FAIL:
            return {
                ...state,
                loading: false,
                authenticated : false,
                errorMessage : action.data.message, 
                error : action.data.error
            }
        default:
            return {
                ...state
            }
    }
}

export default signupReducer;