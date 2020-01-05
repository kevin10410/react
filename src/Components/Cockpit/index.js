import React from 'react';
import styled from 'styled-components';

const ButtonToogleTable = styled.button`
  cursor: pointer;
  border: 1px solid blue;
  outline: none;
  padding: 5px 10px;
  background-color: ${ props => props.showPersons
    ? '#ffffff' : '#85d285' };

  &:hover {
    background-color: #a1fba1;
  }

  &:active {
    background-color: #85d285;
  }
`;

const Cockpit = (props) => (
  <div>
    <h1>React App</h1>
    <ButtonToogleTable
      showPersons = { props.showPersons }
      onClick = { props.tooglePersonsTable }
    > Toogle Persons Table
    </ButtonToogleTable>
  </div>
);

export default Cockpit;
