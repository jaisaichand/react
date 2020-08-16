import React, { Component } from 'react';
import UserOutput from './userOutput';
class UserInput extends Component {

    style = {
        border: '10px solid red'
    }

    state = {
        userName: 'jai'
    }

    changeState = () => {
        this.setState({ userName: 'Jaii' });
    }

    changeHandler = (event) => {
        this.setState({ userName: event.target.value })
    }

    render() {
        return (
            <div>

                <input type="text" onChange={this.changeHandler} value={this.state.userName} />

                <UserOutput style={this.style} userName={this.state.userName}></UserOutput>
                <UserOutput style={this.style} userName={this.state.userName}></UserOutput>
                <UserOutput style={this.style} userName={this.state.userName}></UserOutput>

            </div>
        )
    }
}

export default UserInput;