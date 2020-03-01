import React from 'react';

function Search(props) {
  return (
    <div>
        <div className="add-items d-flex">
            <input type="text" className="form-control todo-list-input" onKeyUp={props.keyup} placeholder="What do you need to do today?" value={props.value} onChange={props.change}/>
            <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={props.click}>Add</button>
        </div>
    </div>
  );
}

export default Search;
