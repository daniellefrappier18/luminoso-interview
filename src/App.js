import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import Displayjson from './components/Displayjson';

function App() {
  let [displayType, setDisplayType] = useState('table');
  const [input, updateInput] = useState(); //storing the input from textbox
  const [resultsActive, updateResultsActive] = useState(false); //storing if the button has been pressed
  const [resultWords, updateResultWords ] = useState(); //store the result of the input after all functions have been executed 

  //first grab value from input onChange
  function handleInputChange(e) {
    updateInput(e.target.value);
  }

  //once clicked call the high order function to count the words
  function handleSubmit(e) {
    e.preventDefault();
    countTheWords(input);
  }

  function countTheWords(input) {
    const wordArray = []
    const wordCounts = new Map() 
    input.split(' ').forEach(word=> { //split up input into words and loop through each word in input
      const currentWordCount = wordCounts.get(word) || 0
      wordCounts.set(word, currentWordCount +1)
      wordArray.push({word: word, count: currentWordCount +1}) //put all of the words from a string into a array with a count, there could be duplicates
    })

    sortByKey(wordArray, 'count'); //now sort the array with from low count to highest
    updateResultWords(removeDups(wordArray, it => it.word)); //now remove the duplicated words
    updateResultsActive(true); //button has been push and functions have been excuted resultWords will not be undefined
  }

  function sortByKey(array, key) {
    return array.sort(function(a, b) {
      var x = a[key]; var y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }

  function removeDups (data, key) {
    return [
      ...new Map(
        data.map(x => [key(x), x])
      ).values()
    ]
  }
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text-area">Text to analyze:</label>
          <textarea value={input} onChange={handleInputChange} id="text-area" />
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
      <div>
        {displayType === 'table' && resultsActive ? 
          <Table resultWords={resultWords} /> 
        : displayType === 'json' && resultsActive ? 
          <Displayjson resultWords={resultWords} /> 
        : ""}
        
      </div>
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
