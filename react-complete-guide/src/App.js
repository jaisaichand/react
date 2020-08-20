import React, { Component } from 'react';

import ConditionalRender from './ConditionalRender';

import Person from './Person/Person';

import PersonsIterate from './Person/PersonsIterate'

import './App.css';

import UserInput from './assignment/UserInput';

class App extends Component {
  state = {
    persons: [
      { name: 'jai', age: 22 },
      { name: 'max', age: 28 },
      { name: 'manu', age: 29 }
    ],
    messege1: '',
    messege2: 'hello world',
    name: 'jai'
  }

  clickedItHandler = (data) => {
    console.log(data)
    this.setState({
      persons: [
        { name: 'chand', age: 23 },
        { name: 'maximillian', age: 28 },
        { name: 'manu', age: 29 }
      ]
    }, () => {
      this.setState({ messege1: 'Changed ittt' })
    })
  }

  changeHandler = (event) => {
    this.setState({ name: event.target.value })
  }

  render() {

    return (
      <div className="App">
        <p>{this.state.name}</p>
        <h2>Hello world!!</h2>
        <input type="text" onChange={this.changeHandler} value={this.state.name} />
        <button onClick={this.clickedItHandler.bind(this, 'jai')}>change Itttt</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > {this.state.persons[0].name} thats being passed as props.children</Person>
        <Person click={this.clickedItHandler.bind(this, 'max')} name={this.state.persons[1].name} age={this.state.persons[1].age} > {this.state.persons[1].name} thats being passed as props.children</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} > {this.state.persons[2].name} thats being passed as props.children</Person>

        <p>{this.state.messege1}</p>

        <p>{this.state.messege2}</p>

        <UserInput></UserInput>
        <hr />
        <ConditionalRender />
        <br />
        <br />
        <PersonsIterate />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
