import React from 'react';

function Validator(props) {

    let resultString = '';
    if (props.length > 5) {
        resultString = 'Text Too long'
    }
    else if (props.length <= 5) {
        resultString = 'Text too short'
    }
    return (
        <div>
            <p>{resultString}</p>
        </div>
    )
}

export default Validator;