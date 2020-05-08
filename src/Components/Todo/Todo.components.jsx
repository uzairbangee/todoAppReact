import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem.component";
import Search from "../Search/Seach.component";
import "./Todo.css";
import {connect} from 'react-redux';
import TodoMiddleware from '../../Store/middleware/todoMiddleware';
import Alert from "../Alert/Alert";

// USE THE STATE AS THE DATA STORE
// WHENEVER THE STATE CHANGES YOUR COMPONENT WILL RE-RENDER
// DONT SAVE DATA EXTERNALLY AND USE THAT AS A TRIGGER TO STATE
class Todo extends Component {
  state = {
    title: "",
  };

  ////Triger on every change of character in input tag.
    handleChange = event => {
        const { value } = event.target;
        this.setState({ title: value });
    };

  ////Triger on every click of submit button.
    handleClick = () => {
        if (this.state.title && this.props.todos && this.props.todos.every(item => this.state.title !== item.task)) {
        this.props.addTodo({task : this.state.title})
        this.setState({ title: "" });
        }
    };


  ///Trigger when key enter is press
    handleEnter = event => {
        if (event.keyCode === 13) {
        event.preventDefault();
        this.handleClick();
        }
    };

    componentDidMount = () => {
        this.props.getTodo();
    }

    render() {
        return (
        <div>
            {this.props.message && <Alert type="danger" message={this.props.message}/>}
            <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                    <div className="card px-3">
                    <div className="card-body">
                        <h4 className="card-title">Awesome Todo list</h4>
                        <Search
                        value={this.state.title}
                        change={this.handleChange}
                        keyup={this.handleEnter}
                        click={this.handleClick}
                        />
                        <div className="list-wrapper">
                        <ul className="d-flex flex-column-reverse todo-list">
                            {this.props.todos && 
                            this.props.todos.map((item, index) => (
                            <TodoItem
                                checked={item.completed === true ? true : false}
                                key={item.id}
                                title={item.task}
                                check={() => this.props.updateTodo(item.id, index)}
                                click={() => this.props.deleteTodo(item.id)}
                                status={item.completed}
                            />
                            ))}
                        </ul>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        todos : state.todo.todo,
        message : state.todo.errorMessage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getTodo : () => dispatch(TodoMiddleware.getTodoMiddleware()),
        addTodo : (data) => dispatch(TodoMiddleware.addTodoMiddleware(data)),
        updateTodo : (id, index) => dispatch(TodoMiddleware.updateTodoMiddleware(id, index)),
        deleteTodo : (id) => dispatch(TodoMiddleware.deleteTodoMiddleware(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
