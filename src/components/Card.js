import React, {useEffect, useState} from 'react'
import '../App.css'
import PropTypes from "prop-types";

const Card = (props) => {

    let id = props.location.state.id;
    let name = props.location.state.name;

    const [poke, setPoke] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/pokemons/${id}`)
            .then(res => {
                return res.json();
            })
            .then(data => {
                setPoke(data)
            })
    }, [id]);

    function firstLetterToUpperCase(str) {
        return str
            .split(" ")
            .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
    }

    console.log(name)
    return (
        <div className='card'>
            <div className='pokemon'>
                <il>
                    <li>#{poke.id}</li>
                    <li>{firstLetterToUpperCase(name)}</li>
                    <li>{poke.date ? poke.date : 'Pokemon is not caught'}</li>
                </il>
                <img src={require(`../img/pokemons/${id}.png`).default} className="imgCard" alt="..."/>
            </div>
        </div>
    )
}

Card.propTypes = {
    poke: PropTypes.object.isRequired,
    name: PropTypes.object.isRequired,
    id: PropTypes.object.isRequired,
}

export default Card