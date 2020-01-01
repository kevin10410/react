import React, {
  // useState,
  Component,
} from 'react';
import Person from './Components/Person';
import './App.css';

// function App () {
//   const [ personsState, setPersonsState ] = useState({
//     persons: [
//       { name: 'Kevin', age: 20 },
//       { name: 'OTree', age: 18 },
//     ],
//   });

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: 'OTree', age: 18 },
//         { name: 'Kevin', age: 20 },
//       ],
//     });
//   };

//   return (
//     <div className="App">
//         <h1>React App</h1>
//         <Person
//           name = { personsState.persons[0].name}
//           age  = { personsState.persons[0].age}
//         />
//         <Person
//           name = { personsState.persons[1].name}
//           age  = { personsState.persons[1].age}
//         />
//         <button
//           onClick={ switchNameHandler }
//         >Switch Name
//         </button>
//       </div>
//   )
// }

class App extends Component {
  state = {
    persons: [
      { name: 'Kevin', age: 20 },
      { name: 'OTree', age: 18 },
    ],
    showPersons: true,
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'OTree', age: 18 },
        { name: 'Kevin', age: 20 },
      ],
    })
  };

  tooglePersonsTable = () => {
    const { showPersons } = this.state;
    this.setState({ showPersons: !showPersons });
  };

  deletePersonHandler = (index) => {
    const { persons } = this.state;
    persons.splice(index, 1);
    this.setState({ persons });
  };

  nameChangeHandler = (value, index) => {
    const { persons } = this.state;
    persons[index].name = value;
    this.setState({ persons });
  };

  render() {
    const buttonStyleObj = {
      cursor: 'pointer',
      backgroundColor: 'white',
      border: '1px solid blue',
      outline: 'none',
      padding: '5px 10px',
    }

    const personsTable = this.state.showPersons
      ? (<div className="personsTable">
          { this.state.persons
            .map((person, index) =>
              <Person
                name = { person.name }
                age  = { person.age }
                key = { index }
                click = { () => this.deletePersonHandler(index)}
                change = { (event) => this.nameChangeHandler(event.target.value, index)}
              />)
          }
        </div>
        )
      : null;

    return (
      <div className="App">
        <h1>React App</h1>
        <button
          style={buttonStyleObj}
          onClick={ this.tooglePersonsTable }
        >Toogle Persons Table
        </button>
        { personsTable }
      </div>
    )
  }
}
export default App;
