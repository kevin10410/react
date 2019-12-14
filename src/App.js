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
          click = { this.switchNameHandler }
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
