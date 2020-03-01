import React from 'react';

const Password = (props) => {
    return (
        <div>
        <label htmlFor="uname"><b>Password</b></label>
        <input type="password" onChange={props.change} value={props.value} placeholder="Enter Password" name="password" required/>
        </div>
    )
}

export default Password;