import React from 'react';
import './Person.css'

const Person = (props) => {
    return (<div onClick={props.click} className="Person">

        <p>I am a {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
    </div>)
}

export default Person;