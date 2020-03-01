import React from 'react';
import '../Todo/Todo.css'

function Lists(props) {
  return (
    <div>
        <li className={props.class}>
            <div className="form-check">
                <label className="form-check-label">
                    <input className="checkbox" type="checkbox" onChange={props.check} checked={props.status === "completed" ? 'checked' : false}  /> {props.title}
                    <i className="input-helper"></i>
                </label>
            </div>
            <i className="remove mdi mdi-close-circle-outline fa fa-trash" onClick={props.click}></i>
        </li>
    </div>
  );
}

export default Lists;
