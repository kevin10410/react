import React, { Component } from 'react';
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
  font-weight: ${ props => props.age > 18 ? 'bold' : 'normal'};
`;

class Person extends Component {
  constructor(props) {
    super(props)
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }

  render() {
    console.log('Person rendering');
    return (
      <DivPerson>
      <PPersonName
        age = { this.props.age }
        onClick = { this.props.click }
      >I'm { this.props.name } and I'm { this.props.age } years old
      </PPersonName>
      <input type="text"
        ref = { this.inputElementRef }
        value = { this.props.name }
        onChange = { this.props.change }
      ></input>
    </DivPerson>
    );
  };
};

export default Person;