import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [componentType, setType] = useState('class');
  function switchComponents(): void | string {
    return componentType === 'class' ? setType('functional') : setType('class');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Training app</p>
      </header>
      <div className="App-body">
        <div className="component-header">
          <button type="button" className="btn" onClick={switchComponents}>
            Switch components
          </button>
          {componentType === 'class' ? (
            <div>
              <p>Class based component</p>
              {/* component goes here */}
            </div>
          ) : (
            <div>
              <p>Functional component</p>
              {/* component goes here */}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
