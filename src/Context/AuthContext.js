import React from 'react';

const AuthContext = React.createContext({
  isAuth: false,
  loginHandler: () => {},
});

export default AuthContext;