import React from 'react';
import styled from 'styled-components';


const DivPerson = styled.div`
  width: 60%;
  margin: 20px auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
`;

const PPersonName = styled.p`
  color: ${ props => props.age > 18 ? 'red' : 'blue'};
  fontWeight: ${ props => props.age > 18 ? 'bold' : 'normal'};
`;

const Person = (props) => {
  const personNameStyleObj = {
    color: `${props.age > 18 ? 'red' : 'blue'}`,
    fontWeight: `${props.age > 18 ? 'bold' : 'normal'}`,
  };

  return (
    <DivPerson>
      <PPersonName
        style = {personNameStyleObj}
        onClick = { props.click }
      >I'm { props.name } and I'm { props.age } years old
      </PPersonName>
      <input type="text"
        value = { props.name }
        onChange = { props.change }
      ></input>
    </DivPerson>
  )
};

export default Person;