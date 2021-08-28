import React from "react"
import PropTypes from 'prop-types'
import '../../App.css'

function PokemonItem({ poke }) {
    return (
    <li>
        <span>
            <h2>{poke.name}</h2>
            <h3>{poke.id}</h3>
            {
                poke.catch ? <h3>Data</h3> : <button
                    className='rm'
                >Catch!
                </button>
            }
        </span>
    </li>
    )
}

PokemonItem.propTypes = {
    poke: PropTypes.object.isRequired
}

export default PokemonItem