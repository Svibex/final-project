import React from "react"
import {Link} from "react-router-dom";
import PropTypes from 'prop-types'
import '../App.css'

function PokemonItem({poke, togglePoke}) {

    function firstLetterToUpperCase(str) {
        return str
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    }

    return (
        <div className='list'>
            <li>
        <span>
            <h2>{firstLetterToUpperCase(poke.name)}</h2>
                <Link to={{
                    pathname: "/card",
                    state: {
                        id: poke.id,
                        name: poke.name,
                        date: poke.date
                    }
                }}>
                    <img src={require(`../img/pokemons/${poke.id}.png`).default} className="imgPoke" alt="..."/>
                </Link>
            {
                poke.caught ?
                    <button
                        className='linkDis'
                        disabled>Gotcha!
                    </button> :
                    <button
                        className='link'
                        onClick={() => togglePoke(poke.id, poke.name)}>Catch!
                    </button>
            }
        </span>
            </li>
        </div>
    )
}

PokemonItem.propTypes = {
    poke: PropTypes.object.isRequired,
}

export default PokemonItem