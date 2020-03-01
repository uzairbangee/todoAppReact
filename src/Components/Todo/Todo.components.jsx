import React, { Component } from "react";
import TodoItem from "../TodoItem/TodoItem.component";
import Search from "../Search/Seach.component";
import "./Todo.css";

// USE THE STATE AS THE DATA STORE
// WHENEVER THE STATE CHANGES YOUR COMPONENT WILL RE-RENDER
// DONT SAVE DATA EXTERNALLY AND USE THAT AS A TRIGGER TO STATE
class Todo extends Component {
  state = {
    title: "",
    status: "not-complete",
    todos: []
  };

  ////Triger on every change of character in input tag.
    handleChange = event => {
        const { value } = event.target;
        this.setState({ title: value });
    };

  ////Triger on every click of submit button.
    handleClick = () => {
        if (this.state.title) {
        const { title, status, todos } = this.state;
        const newTodos = [...todos, { title, status }];
        this.setState({ todos: newTodos, title: "" });
        }
    };


  ///Trigger when key enter is press
    handleEnter = event => {
        if (event.keyCode === 13) {
        event.preventDefault();
        this.handleClick();
        }
    };

  
  ///Triger when remove button is clicked
    handleRemove = (event, index) => {
        const { todos } = this.state;
        const newTodosArray = todos.splice(index, 1);
        this.setState({ todos: newTodosArray });
    };


  ///Trigger when checked is ticked.
    handleCheck = ({ target }, index) => {
        const { todos } = this.state;
        const newTodos = todos;
        target.checked
        ? (newTodos[index].status = "completed")
        : (newTodos[index].status = "not-complete");

        this.setState({ todos: newTodos });
    };

    render() {
        return (
        <div>
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
                            {this.state.todos.map((item, index) => (
                            <TodoItem
                                checked={item.status === "completed" ? true : false}
                                key={index}
                                title={item.title}
                                check={event => this.handleCheck(event, index)}
                                click={event => this.handleRemove(event, index)}
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

export default Todo;
