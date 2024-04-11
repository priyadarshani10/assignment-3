import React from 'react';

function ChildComponent(props) {
  // Access props passed from the parent component
  const { user } = props;

  return (
    <div>
      <h2>Child Component</h2>
      {/* Display user data */}
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>City: {user.city}</p>
    </div>
  );
}

export default ChildComponent;
