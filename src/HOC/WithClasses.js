import React from 'react';

// const WithClasses = props => {
//   return (
//     <div className = { props.classes }>
//       { props.children }
//     </div>
//   );
// };

const WithClasses = (WrappedComponent, className) => props => (
  <div className = { className }>
    <WrappedComponent
      { ...props }
    />
  </div>
);

export default WithClasses;

