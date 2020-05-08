import React from 'react';

const Input = (props) => {
    return (
        <div>
        <label htmlFor="uname"><b>{props.label}</b></label>
        <input type={props.type} onChange={props.change} placeholder={props.placeholder} name={props.name} required/>
        </div>
    )
}

export default Input;