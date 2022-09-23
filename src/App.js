import React from 'react';
import logo from './logo.svg';
import './App.css';
// import axios from 'axios';


// axios.get('https://pokeapi.co/api/v2/evolution-chain/')
//   .catch(error => console.log(error))
//   .then(response => console.log(response))

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          This will be Pokemon app
        </h1>
        <a className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React with Pokemon API
        </a>
      </header>
    </div>
  );
}

export default App;
