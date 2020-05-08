import axios from 'axios';
import SignupAction from '../action/signupAction';
import ServerPath from '../../Paths/serverPath';

export default class SignupMiddleware {

    static signupMiddleware = (data) => {
        return (dispatch) => {
            dispatch(SignupAction.userSignup());
            axios.post(ServerPath.SIGNUP, data)
            .then(response => {
                // console.log(response.data.username);
                if(response.data.message){
                    dispatch(SignupAction.userSignupFail({message: response.data.message}))
                }
                else
                {
                    localStorage.setItem('token', response.data.user.token);
                    dispatch(SignupAction.userSignupSuccess({username: response.data.user.username}))
                }
            })
            .catch(err => {
                dispatch(SignupAction.userSignupFail({message: err.message}))
            })
        } 
    }
}
