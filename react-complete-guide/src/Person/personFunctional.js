import React, { useState } from 'react'

const personFunctional = () => {

    const [stateDat, setStateDat] = useState(
        {
            persons: [
                { name: 'jai', age: 22 },
                { name: 'max', age: 28 },
                { name: 'manu', age: 29 }
            ],
            messege1: '',
            messege2: 'hello world'
        }
    );



    clickedItHandler = () => {
        setStateDat({
            persons: [
                { name: 'chand', age: 23 },
                { name: 'maximillian', age: 28 },
                { name: 'manu', age: 29 }
            ]
        }, () => {
            this.setState({ messege1: 'Changed ittt' })
        })
    }


    return (
        <div className="PersonFunctional">
            <h2>Hello world!!</h2>
            <button onClick={clickedItHandler}>change Itttt</button>
            <Person name={stateDat.persons[0].name} age={stateDat.persons[0].age} > {stateDat.persons[0].name} thats being passed as props.children</Person>
            <Person name={stateDat.persons[1].name} age={stateDat.persons[1].age} > {stateDat.persons[1].name} thats being passed as props.children</Person>
            <Person name={stateDat.persons[2].name} age={stateDat.persons[2].age} > {stateDat.persons[2].name} thats being passed as props.children</Person>

            <p>{stateDat.messege1}</p>

            <p>{stateDat.messege2}</p>
        </div>
    )
}

export default personFunctional