import React from "react";

function TodoItem(props) {
  return (
    <div>
      <li className={props.checked ? `completed`: 'not-complete'}>
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="checkbox"
              type="checkbox"
              onChange={props.check}
            />{" "}
            {props.title}
            <i className="input-helper"></i>
          </label>
        </div>
        <i
          className="remove mdi mdi-close-circle-outline fa fa-trash"
          onClick={props.click}
        ></i>
      </li>
    </div>
  );
}

export default TodoItem;
