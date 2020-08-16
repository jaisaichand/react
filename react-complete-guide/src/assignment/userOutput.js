import React from 'react';
import './userOutput.css';

const UserOutput = (props) =>{

    return (
        <div className="output">
            <p>{props.userName}</p>
            <p>{props.userName}</p>
        </div>
    )
}

export default UserOutput;