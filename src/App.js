import React from 'react';
import './App.css';
import axios from 'axios';

// 'wild pokemon appear' app
// 'random team builder' app (3 reject options)
// 'whos that pokemon' app (guessin game)

const api = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

const pokeRandom = Math.floor(Math.random() * 920);

async function listPoke() {
  try {
    const response = await api.get('50');
    console.log(response.data.name);
  } catch (err) {
    console.log(err.response.data);
    console.log(err.response.status);
    console.log(err.response.headers);
  }
}

listPoke()
//   })


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This will be Pokemon app<br></br>

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
