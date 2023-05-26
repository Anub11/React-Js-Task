import React, { useState } from 'react';

const App = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const toggleBackgroundColor = () => {
    setBackgroundColor((prevColor) => {
      return prevColor === 'white' ? 'lightgray' : 'white';
    });
  };

  return (
    <div style={{ backgroundColor, minHeight: '100vh' }}>
      <button onClick={toggleBackgroundColor}>Toggle Background Color</button>
      <h1>Welcome to My App</h1>
      <p>This is a React application with a background color toggle functionality.</p>
    </div>
  );
};

export default App;
