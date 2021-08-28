import React from 'react'
import './App.css'
import PokemonList from "./components/Pokemon/PokemonList"

function App() {
    let pokes = [
        {
            "name": "bulbasaur",
            "id": 1
        },
        {
            "name": "ivysaur",
            "id": 2
        },
        {
            "name": "venusaur",
            "id": 3,
            "catch": true
        }
]

  return (
      <div className='wrapper'>
        <h1>Pokémon: gotta catch 'em all!</h1>

        <PokemonList pokes={pokes} />
      </div>
  );
}

export default App;