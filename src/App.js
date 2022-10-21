import React from 'react';
import './App.css';
import Pokemon from './components/pokemon';

// - conseguir y mostrar listado de pokemon (20) (como colapsable)
// - hacer bonito boton de pokemon
// (en otro componente) (comunicar entre componentes) en click de uno de ellos, entrar al detalle de dicho pokemon, un dato extra


function App() {
  return (
    <div className="App">

      <h1>
        This will be Pokemon app<br></br>
      </h1>
      <main>
        <Pokemon />
      </main>
    </div>
  );
}

export default App;
