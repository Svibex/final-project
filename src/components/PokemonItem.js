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
                <Link to="/card">
                    <img src={require(`../img/pokemons/${poke.id}.png`).default} className="imgPoke" alt="..."/>
                </Link>
            {
                poke.caught ?
                    <button
                        className='rmD'
                        disabled>Gotcha!
                    </button> :
                    <button
                        className='rm'
                        onClick={() => togglePoke(poke.id, poke.name, poke.date)}>Catch!
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