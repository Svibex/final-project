import React, {useEffect, useState} from 'react'
import PokemonItem from "./PokemonItem";

function CaughtPokemonList() {

    const [pokes, setPokes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (fetching) {
            fetch(`http://localhost:8080/pokemons?caught=true&_limit=24&_page=${currentPage}`)
                .then(res => {
                    return res.json();
                })
                .then(data => {
                    console.log(data)
                    setPokes([...pokes, ...data])
                    setCurrentPage(prevState => prevState + 1)
                })
                .finally(() => setFetching(false))
        }
    }, [])

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


    return (
        <ul>
            {pokes.map(poke => {
                return <PokemonItem
                    poke={poke}
                />
            })
            }
        </ul>
    )
}

export default CaughtPokemonList