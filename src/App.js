import React, {useState} from 'react';
import './App.css';

function App() {

  const [firstDieResult, setFirstDieResult] = useState(1);
  const [secondDieResult, setSecondDieResult] = useState(6);

  const firstDieImage = require(`./assets/${firstDieResult}.png`);
  const secondDieImage = require(`./assets/${secondDieResult}.png`);

  function rollDice() {
    setFirstDieResult(Math.ceil(Math.random() * 6));
    setSecondDieResult(Math.ceil(Math.random() * 6));
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='Div_under'>
          <img src={firstDieImage} className="die" alt="Die one" />
          <img src={secondDieImage} className="die" alt="Die two" />
        </div>
        <span>{firstDieResult + secondDieResult}</span>
        <button className='button' onClick={rollDice}>Roll</button>
      </header>
    </div>
  );
}

export default App;
