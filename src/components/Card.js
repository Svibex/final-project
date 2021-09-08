import React, {useEffect, useState} from "react"
import '../App.css'

function Card() {

    return (
        <div className='card'>
            <div className='pokemon'>
                <il>
                    <li>ID</li>
                    <li>Pokemon Name</li>
                    <li>Дата поимки</li>
                </il>
                <h3>Здесь будет место для вашей картинки! :-)</h3> {/*потом удалить эту строку*/}
            {/*<img src={require(`../img/pokemons/${poke.id}.png`).default} className="imgPoke" alt="..."/>*/}
            </div>
        </div>
    )
}

export default Card