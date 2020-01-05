import React from 'react';
import Person from './Person';

const Persons = (props) => props.persons
  .map((person, index) => {
    return (
      <Person
        name = { person.name }
        age  = { person.age }
        key = { index }
        click = { () => props.deletePersonHandler(index)}
        change = { (event) => props.nameChangeHandler(event.target.value, index)}
      ></Person>
    );
  });

export default Persons;