import React from 'react';
import './char.scss';

function Char(props) {


    return (
        <div className="charr" onClick={props.click}>
            {props.char}
        </div>
    )
}

export default Char;