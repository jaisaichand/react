import React, { Component } from 'react';
import Validator from './Validator';

class Assignmenttwo extends Component {

    state = {
        length: 0
    }

    typeLengthChangeHaldler = (event) => {
        this.setState({ length: event.target.value.length })
        console.log(event.target.value.length)
    }

    render() {
        return (
            <div>
                <div>
                    <input type="text" onChange={(e) => { this.typeLengthChangeHaldler(e) }} />
                    <span>{this.state.length}</span>
                </div>
                <Validator length={this.state.length} />
            </div>
        )
    }
}

export default Assignmenttwo;