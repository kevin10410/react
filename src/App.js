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

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'OTree', age: 18 },
        { name: 'Kevin', age: 20 },
      ],
    })
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
        <button
          onClick={ this.switchNameHandler }
        >Switch Name
        </button>
      </div>
    )
  }
}
export default App;
