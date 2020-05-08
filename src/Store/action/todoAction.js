import ActionTypes from './ActionTypes';


export default class TodoAction {

    static getTodo = () => {
        return {
            type: ActionTypes.GET_TODO,
        }
    }

    static getTodoSuccess = (data) => {
        return {
            type: ActionTypes.GET_TODO_SUCCESS,
            data
        }
    }

    static getTodoFail = (data) => {
        return {
            type: ActionTypes.GET_TODO_FAIL,
            data
        }
    }

    static addTodo = () => {
        return {
            type: ActionTypes.ADD_TODO,
        }
    }

    static addTodoSuccess = (data) => {
        return {
            type: ActionTypes.ADD_TODO_SUCCESS,
            data
        }
    }

    static addTodoFail = (data) => {
        return {
            type: ActionTypes.ADD_TODO_FAIL,
            data
        }
    }

    static updateTodo = () => {
        return {
            type: ActionTypes.UPDATE_TODO,
        }
    }

    static updateTodoSuccess = (data) => {
        return {
            type: ActionTypes.UPDATE_TODO_SUCCESS,
            data
        }
    }

    static updateTodoFail = (data) => {
        return {
            type: ActionTypes.UPDATE_TODO_FAIL,
            data
        }
    }

    static deleteTodo = () => {
        return {
            type: ActionTypes.DELETE_TODO,
        }
    }

    static deleteTodoSuccess = (data) => {
        return {
            type: ActionTypes.DELETE_TODO_SUCCESS,
            data
        }
    }

    static deleteTodoFail = (data) => {
        return {
            type: ActionTypes.DELETE_TODO_FAIL,
            data
        }
    }
}