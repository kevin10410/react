import React from 'react';
import './Person.css';

const Person = (props) => {
  return (
    <div>
      <p className="Person"
        onClick = { props.click }
      >I'm { props.name } and I'm { props.age } years old</p>
    </div>
  )
};

export default Person;