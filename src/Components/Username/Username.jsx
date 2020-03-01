import React, {Component} from 'react';

const Username = (props) => {
    return (
        <div>
        <label htmlFor="uname"><b>Username</b></label>
        <input type="text" onChange={props.change} value={props.value} placeholder="Enter Username" name="username" required/>
        </div>
    )
}

export default Username;