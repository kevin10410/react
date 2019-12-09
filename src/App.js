import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  state = {
    persons: [
      { name: 'Kevin', age: 20 },
      { name: 'OTree', age: 18 },
    ],
  };

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person
          name = { this.state.persons[0].name}
          age  = { this.state.persons[0].age}
        />
        <Person
          name = { this.state.persons[1].name}
          age  = { this.state.persons[1].age}
        />
      </div>
    )
  }
}
export default App;
