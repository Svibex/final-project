import React, {useEffect, useState} from 'react'
import './App.css'
import PokemonList from "./components/Pokemon/PokemonList"

function App() {
    const [pokes, setPokes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);
    const [sort, setSort] = useState(false);

    useEffect(() => {
        if (fetching) {
            fetch(`http://localhost:8080/pokemons?_limit=25&_page=${currentPage}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setPokes([...pokes, ...data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching])


    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && pokes.length < 721) {
            setFetching(true)
        }
    }

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

    function sortPoke() {
        setSort(true);
        setFetching(true);
    }

    return (
        <div className='wrapper'>
            <h1>Pokémon: gotta catch 'em all!</h1>
            <nav>
                <button
                    className='rm'
                    onClick={() => sortPoke()}
                >
                    Пойманные
                </button>
            </nav>
            {pokes && <PokemonList pokes={pokes} togglePoke={togglePoke}/>}
        </div>
    );
}

export default App;