import React from 'react';
import Lottery from './Lottery'
import './App.css';

function App() {
  return (
    <div className="App">
      <Lottery/>
      <Lottery title='hatoslotto' balls={6} maxNum={45} />
    </div>
  );
}

export default App;
