import React, {
  // useState,
  Component,
} from 'react';
import styled from 'styled-components';

import Persons from '../Components/Persons';
import Cockpit from '../Components/Cockpit';
import WithClasses from '../HOC/WithClasses';

const DivApp = styled.div`
  text-align: center;
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
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        { name: 'Kevin', age: 20 },
        { name: 'OTree', age: 18 },
      ],
      showPersons: true,
    };
    console.log('App.js constructor');
  };

  static getDerivedStateFromProps(props, state) {
    console.log('App.js getDerivedStateFromProps', props);
    return state;
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('App.js shouldComponentUpdate');
    console.log('App.js nextProps', nextProps);
    console.log('App.js nextState', nextState);
    return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('App.js getSnapshotBeforeUpdate');
    console.log('App.js prevProps', prevProps);
    console.log('App.js prevState', prevState);
    return null;
  };

  componentDidUpdate() {
    console.log('App.js componentDidUpdate');
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
    this.setState(( prevState ) => {
      const { persons } = prevState;
      persons[index].name = value;
      return { persons };
    });
  };

  render() {
    console.log('App.js render');
    const personsTable = this.state.showPersons
      ? (<Persons
          persons = { this.state.persons }
          deletePersonHandler = { this.deletePersonHandler }
          nameChangeHandler = { this.nameChangeHandler }
        ></Persons>)
      : null;

    return (
      <DivApp>
        <Cockpit
          showPersons = { this.state.showPersons }
          tooglePersonsTable = { this.tooglePersonsTable }
        ></Cockpit>
        { personsTable }
      </DivApp>
    )
  }
}

export default WithClasses(App, 'app');
