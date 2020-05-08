import ActionTypes from "./ActionTypes";

export default class SignupAction{
    static userSignup = () => {
        return {
            type : ActionTypes.USER_SIGNUP
        }
    }
    
    static userSignupSuccess = (data) => {
        return {
            type : ActionTypes.USER_SIGNUP_SUCCESS,
            data
        }
    }
    
    static userSignupFail = (data) => {
        return {
            type : ActionTypes.USER_SIGNUP_FAIL,
            data
        }
    }
}