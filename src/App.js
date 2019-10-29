import React from 'react';
import Ball from './Ball'
import './App.css';

function App() {
  return (
    <div className="App">
      <Ball num={12} />
      <Ball num={21} />
      <Ball num={5} />
      <Ball num={42} />
      <Ball num={88} />
    </div>
  );
}

export default App;
