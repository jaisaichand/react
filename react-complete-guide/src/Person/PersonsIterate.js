import React, { Component } from 'react'

export class PersonsIterate extends Component {
    state = {
        persons: [
            { name: 'jai', age: 22 },
            { name: 'max', age: 28 },
            { name: 'manu', age: 29 }
        ]
    }
    render() {
        return (
            <div className="gil">
                <div>
                    {
                        this.state.persons.map((person) => {
                            return (
                                <ul>
                                    <li>
                                        {person.name} - {person.age}
                                    </li>
                                </ul>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}


export default PersonsIterate
