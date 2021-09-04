import React from "react"
import PropTypes from 'prop-types'
import '../../App.css'

function PokemonItem({ poke, togglePoke }) {

    return (
    <li>
        <span>
            <h2>{poke.id}</h2>
            <h3>{poke.name}</h3>
            <img src={require(`../imagePokemons/${poke.id}.png`).default} className="card-img-top img-fluid" alt="..."/>
            {
                poke.catch ? <h3>Data</h3> : <button
                    className='rm'
                    onClick={() => togglePoke(poke.id)}
                >Catch!
                </button>
            }
        </span>
    </li>
    )
}

PokemonItem.propTypes = {
    props: PropTypes.object.isRequired,
    poke: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired

}

export default PokemonItem