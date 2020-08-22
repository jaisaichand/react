import React, { Component } from 'react'

export class PersonsIterate extends Component {
    state = {
        persons: [
            {id:'sery5', name: 'jai', age: 22 },
            {id:'s46', name: 'max', age: 28 },
            {id:'dtyui6', name: 'manu', age: 29 }
        ]
    }
    render() {
        return (
            <div className="gil">
                <div>
                    <ul>
                    {
                        this.state.persons.map((person) => {
                            return (
                                
                                    <li key={person.id}>
                                        {person.name} - {person.age}
                                    </li>
                                
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        )
    }
}


export default PersonsIterate
