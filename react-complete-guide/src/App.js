import React, { Component } from 'react';

import Person from './Person/Person';

import './App.css';

class App extends Component {
  state = {
    persons: [
      {name: 'jai', age:22},
      {name: 'max', age:28},
      {name: 'manu', age:29}
    ],
    messege1: '',
    messege2:'hello world'
  }

  clickedItHandler = () => {
    this.setState({
      persons:[
        {name: 'chand', age:23},
      {name: 'maximillian', age:28},
      {name: 'manu', age:29}
      ]
    }, ()=>{
      this.setState({messege1: 'Changed ittt'})
    })
  }

  render() {
    
    return (
      <div className="App">
        <h2>Hello world!!</h2>
        <button onClick={this.clickedItHandler}>change Itttt</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} > {this.state.persons[0].name} thats being passed as props.children</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} > {this.state.persons[1].name} thats being passed as props.children</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} > {this.state.persons[2].name} thats being passed as props.children</Person>

        <p>{this.state.messege1}</p>
        
        <p>{this.state.messege2}</p>
      </div>
    );
  }
}

export default App;
