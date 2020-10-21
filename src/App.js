import React from 'react';
import Button from './Button';

function App() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Start editing</h2>
      <Button onClick={() => console.log('clicked!')}>I am a button</Button>
      <Button primary>I am a primary button</Button>
    </div>
  );
}

export default App;
