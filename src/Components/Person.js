import React from 'react';

const Persion = (props) => {
  return (
    <div>
      <p>I'm { props.name } and I'm { props.age } years old</p>
    </div>
  )
};

export default Persion;