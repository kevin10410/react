import React, {
  // useState,
  Component,
} from 'react';
import Person from './Components/Person';
import styled from 'styled-components';

const DivApp = styled.div`
  text-align: center;
`;

const ButtonToogleTable = styled.button`
  cursor: pointer;
  border: 1px solid blue;
  outline: none;
  padding: 5px 10px;
  background-color: ${ props => props.showPersons
    ? '#ffffff' : '#85d285' };

  &:hover {
    background-color: #a1fba1;
  }

  &:active {
    background-color: #85d285;
  }
`;

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
      <DivApp>
        <h1>React App</h1>
        <ButtonToogleTable
          showPersons={ this.state.showPersons }
          onClick={ this.tooglePersonsTable }
        > Toogle Persons Table
        </ButtonToogleTable>
        { personsTable }
      </DivApp>
    )
  }
}
export default App;
