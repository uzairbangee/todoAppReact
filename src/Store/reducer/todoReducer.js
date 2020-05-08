import ActionTypes from '../action/ActionTypes';

const initialTodoState = {
    todo : [],
    loading: false,
    errorMessage : ""
}

const todoReducer = (state = initialTodoState, action) => {
    switch(action.type){
        case ActionTypes.GET_TODO:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.GET_TODO_SUCCESS:
            return {
                ...state,
                todo: action.data.todo,
                loading: false
            }
        case ActionTypes.GET_TODO_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.data.message
            }

/////////ADD//////////////
        case ActionTypes.ADD_TODO:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.ADD_TODO_SUCCESS:
            const new_todo = [...state.todo, action.data.task];
            return {
                ...state,
                todo: new_todo,
                loading: false
            }
        case ActionTypes.ADD_TODO_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.data.message
            }

//////UPDATE////
        case ActionTypes.UPDATE_TODO:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.UPDATE_TODO_SUCCESS:
            const update_todo = state.todo;
            update_todo[action.data.index] = action.data.task;
            return {
                ...state,
                todo: [...update_todo],
                loading: false
            }
        case ActionTypes.UPDATE_TODO_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.data.message
            }


//////DELETE////
        case ActionTypes.DELETE_TODO:
            return {
                ...state,
                loading: true
            }
        case ActionTypes.DELETE_TODO_SUCCESS:
            return {
                ...state,
                todo: action.data.todos,
                loading: false
            }
        case ActionTypes.DELETE_TODO_FAIL:
            return {
                ...state,
                loading: false,
                errorMessage: action.data.message
            }


        default:
            return {
                ...state
            }
    }
}

export default todoReducer;