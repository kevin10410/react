import React, { Component } from 'react';
import Person from './Person';

class Persons extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('Persons.js getDerivedStateFromProps', props);
    return state;
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Persons.js shouldComponentUpdate');
    console.log('Persons.js nextProps', nextProps);
    console.log('Persons.js nextState', nextState);
    return true;
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Persons.js getSnapshotBeforeUpdate');
    console.log('Persons.js prevProps', prevProps);
    console.log('Persons.js prevState', prevState);
    return null;
  };

  componentDidUpdate() {
    console.log('Persons.js componentDidUpdate');
  };

  render() {
    console.log('Persons rendering');
    return this.props.persons
      .map((person, index) => {
        return (
          <Person
            name = { person.name }
            age  = { person.age }
            key = { index }
            click = { () => this.props.deletePersonHandler(index)}
            change = { (event) => this.props.nameChangeHandler(event.target.value, index)}
          ></Person>
        );
      });
  };
};

export default Persons;