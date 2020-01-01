import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div>
      <p className="Person"
        onClick = { props.click }
      >I'm { props.name } and I'm { props.age } years old</p>
      <input type="text"
        value = { props.name }
        onChange = { props.change }
      ></input>
    </div>
  )
};

export default Person;