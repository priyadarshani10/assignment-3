import React from 'react';
import ChildComponent from './Child';

function ParentComponent() {
  // Define data to be passed as props
  const userData = {
    name: 'priyadarshani sarangi',
    age: 23,
    city: 'New York'
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass userData as props to ChildComponent */}
      <ChildComponent user={userData} />
    </div>
  );
}

export default ParentComponent;
