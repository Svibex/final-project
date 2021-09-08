import React, {useEffect, useState} from 'react'
import PokemonItem from "./PokemonItem";

function PokemonList() {

    const [pokes, setPokes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            fetch(`http://localhost:8080/pokemons?_limit=24&_page=${currentPage}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    setPokes([...pokes, ...data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [fetching]);

    const scrollHandler = (e) => {
        const POKEMON_VALUE = 720
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100
            && pokes.length <= POKEMON_VALUE) {
            setFetching(true)
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return function () {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    function togglePoke(id, name) {
        const date = new Date().toUTCString();
        let pokemon = {name, id, caught: true, date}
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(pokemon)
        };
        fetch(`http://localhost:8080/pokemons/${id}`, requestOptions)
            .then(response => response.json())
            .then(data => {
                setPokes(
                    pokes.map(poke => {
                        if (poke.id === id) {
                            poke = data;
                        }
                        return poke
                    })
                )
            });
    }

    return (
        <ul>
            {pokes.map(poke => {
                return <PokemonItem
                    poke={poke}
                    togglePoke={togglePoke}
                key={poke.id}/>
            })
            }
        </ul>
    )
}

export default PokemonList