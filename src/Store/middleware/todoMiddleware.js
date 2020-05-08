
import axios from 'axios';
import TodoAction from '../action/todoAction';
import SignupAction from "../action/signupAction"
import ServerPath from '../../Paths/serverPath';


axios.defaults.headers.common['Authorization'] = localStorage.getItem('token') || '';
export default class TodoMiddleware {

    static getTodoMiddleware = () => {
        return (dispatch) => {
            dispatch(TodoAction.getTodo());
            axios.get(ServerPath.TODO_GET)
            .then(response => {
                if(response.data.error){
                    dispatch(SignupAction.userSignupFail({error : response.data.error}));
                }
                else{
                    if(response.data.todos) 
                        dispatch(TodoAction.getTodoSuccess({todo : response.data.todos}));
                    else
                        dispatch(TodoAction.getTodoSuccess({todo : []}));
                }
            })
            .catch(err => {
                dispatch(TodoAction.getTodoFail({message : err.message}));
            })
        }
    }

    static addTodoMiddleware = (data) => {
        return (dispatch) => {
            dispatch(TodoAction.addTodo());
            axios.post(ServerPath.TODO_POST, data)
            .then(response => {
                // if(response.data.message)
                //     dispatch(TodoAction.addTodoFail({message : response.data.message}));
                // else
                    dispatch(TodoAction.addTodoSuccess({task : response.data.task}));
            })
            .catch(err => {
                dispatch(TodoAction.addTodoFail({message : err.message}));
            })
        }
    }

    static updateTodoMiddleware = (id, index) => {
        return (dispatch) => {
            dispatch(TodoAction.updateTodo());
            axios.put(ServerPath.TODO_UPDATE+id)
            .then(response => {
                dispatch(TodoAction.updateTodoSuccess({task : response.data.task, index: index}));
            })
            .catch(err => {
                dispatch(TodoAction.updateTodoFail({message : err.message}));
            })
        }
    }

    static deleteTodoMiddleware = (id) => {
        return (dispatch) => {
            dispatch(TodoAction.deleteTodo());
            axios.delete(ServerPath.TODO_DELETE+id)
            .then(response => {
                // console.log(index)
                dispatch(TodoAction.deleteTodoSuccess({todos : response.data.todos}));
            })
            .catch(err => {
                dispatch(TodoAction.deleteTodoFail({message : err.message}));
            })
        }
    }
}