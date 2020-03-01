import React, {Component} from 'react';
import Lists from '../Lists/Lists.component'
import Search from '../Search/Seach.component'
import './Todo.css'
import {todo} from '../TodoData';

class Todo extends Component {

    state = {
        title : "",
        status : "not-complete",
    }

    ////Triger on every change of character in input tag.
    handleChange = (event) => {
        const { value } = event.target;
        this.setState({title : value});
    }

    ////Triger on every click of submit button.
    handleClick = () => {
        if(this.state.title){
            const {title, status} = this.state;
            todo.push({title, status});
            this.setState({title : ""});
        }
    }

    ///Trigger when key enter is press
    handleEnter = (event) => {
        if(event.keyCode == 13){
            event.preventDefault();
            this.handleClick();
        }
    }

    ///Triger when remove button is clicked
    handleRemove = (event, index) => {
        todo.splice(index, 1);
        this.setState({title : ""});
    }

    ///Trigger when checked is ticked.
    handleCheck = (event, index) => {
        if (event.target.checked === true){
            todo[index].status = "completed";
        }
        else{
            todo[index].status = "not-complete";
        }
        this.setState({title : ""});
    }

    render(){
        return(
            <div>
                <div className="page-content page-container" id="page-content">
                    <div className="padding">
                        <div className="row container d-flex justify-content-center">
                            <div className="col-lg-12 col-sm-12 col-md-12 col-xs-12">
                                <div className="card px-3">
                                    <div className="card-body">
                                        <h4 className="card-title">Awesome Todo list</h4>
                                            <Search value={this.state.title} change={this.handleChange} keyup={this.handleEnter} click={this.handleClick}/>
                                        <div className="list-wrapper">
                                            <ul className="d-flex flex-column-reverse todo-list">
                                            {todo.map((value, index) => value.status === 'not-complete' ? <Lists key={index} title={value.title} check={(event) => this.handleCheck(event, index)} click={(event) => this.handleRemove(event, index)}/> : <Lists key={index} title={value.title} check={(event) => this.handleCheck(event, index)} class="completed" click={(event) => this.handleRemove(event, index)}/>)}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Todo;