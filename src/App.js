import { useState } from 'react';
import './App.css';

function App() {
  let [displayType, setDisplayType] = useState('table');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text-area">Text to analyze: </label>
          <textarea id="text-area" />
        </div>
        <fieldset>
          <legend>Display results as</legend>
          <DisplayTypeRadio
            type="table"
            currentDisplayType={displayType}
            onSelectNewType={setDisplayType}
          />
          <DisplayTypeRadio
            type="json"
            currentDisplayType={displayType}
            onSelectNewType={setDisplayType}
          />
        </fieldset>
        <button>Count terms</button>
      </form>
      <hr />
      <div>{/* RESULTS GO HERE */}</div>
    </div>
  );
}

export default App;

function DisplayTypeRadio({ onSelectNewType, currentDisplayType, type }) {
  let id = `${type}-radio`;
  return (
    <div>
      <input
        checked={currentDisplayType === type}
        id={id}
        type="radio"
        onChange={() => onSelectNewType(type)}
      />
      <label htmlFor={id}>{type}</label>
    </div>
  );
}
