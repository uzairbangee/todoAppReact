import React, {Component} from 'react';

const Alert = (props) => {
    return (
        <div>
        {
        (props.type === 'success')
        ?
        <div className="alert alert-success" role="alert">
            {props.message}
        </div>
        :
        <div className="alert alert-danger" role="alert">
            {props.message}
        </div>
        }
        </div>
    )
}

export default Alert;