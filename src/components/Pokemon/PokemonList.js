import React from 'react'
import PropTypes from 'prop-types'
import PokemonItem from "./PokemonItem";

function PokemonList(props) {
    return (
        <ul>
            { props.pokes.map(poke => {
                return <PokemonItem
                    poke={poke}
                    togglePoke={props.togglePoke}
                />
            })
            }
        </ul>
    )
}

PokemonList.propTypes = {
    pokes: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default PokemonList