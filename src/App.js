import React, {useEffect, useState} from 'react'
import './App.css'
import PokemonList from "./components/Pokemon/PokemonList"

function App() {
    const [pokes, setPokes] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8080/pokemons')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPokes(data);
            })
            }, [])

    function togglePoke(id) {
        setPokes(
            pokes.map(poke => {
                if (poke.id === id) {
                    poke.catch = true;
                }
                return poke
            })
        )
    }

  return (
      <div className='wrapper'>
        <h1>Pokémon: gotta catch 'em all!</h1>
          {pokes && <PokemonList pokes={pokes} togglePoke={togglePoke}/>}
      </div>
  );
}

export default App;