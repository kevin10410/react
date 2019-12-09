import React, { Component } from 'react';
import Person from './Components/Person';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <Person name="Kevin" age="20"/>
        <Person name="OTree" age="18"/>
      </div>
    )
  }
}
export default App;
