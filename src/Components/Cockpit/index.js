 import React, { useRef, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../Context/AuthContext';

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

const ButtonLogin = styled.button`
  cursor: pointer;
  border: 1px solid blue;
  outline: none;
  padding: 5px 10px;
  background-color: #ffd004;
`;

const Cockpit = (props) => {
  const toogleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    toogleBtnRef.current.click();
  }, [])
  
  return (
    <div>
      <h1>React App</h1>
      <ButtonToogleTable
        ref = { toogleBtnRef }
        showPersons = { props.showPersons }
        onClick = { props.tooglePersonsTable }
      > Toogle Persons Table
      </ButtonToogleTable>
      <ButtonLogin
        onClick = { authContext.loginHandler }
      > Login
      </ButtonLogin>
    </div>
  );
};

export default Cockpit;
