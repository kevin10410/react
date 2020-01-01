import React from 'react';
import './Person.scss';

const Person = (props) => {

  const pClasses = ['Person'];
  props.age > 18 && pClasses.push('Person__warning');

  return (
    <div>
      <p className={ pClasses.join(' ') }
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