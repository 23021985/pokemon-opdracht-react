import axios from "axios";

import React, { useState, useEffect} from "react";

function PokemonCard(props){
    const [pokemon, setPokemon] = useState(null);
    console.log("state in card", pokemon)

    useEffect(()=> {
        async function fetchPokemon() {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.nameOfPokemon}`);
            // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20`)

            console.log(response.data)
            setPokemon(response.data)
        }

        fetchPokemon()
    }, []);


    return(
<div className="card">
        {pokemon ? (
        <div className="card1">
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites.front_default}/>
            <p><b>Moves:</b>{pokemon.moves.length}</p>
            <p><b>Weight:</b>{pokemon.weight}</p>
            <div className="abi">{pokemon.abilities.map(ability => {
                return <p>{ability.ability.name}</p>

            })}</div> </div>
            ):(<h3>loading..</h3>
        )}
        </div>

    )

}



export default PokemonCard;