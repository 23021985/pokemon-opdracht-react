import axios from "axios";

import React, { useState, useEffect} from "react";

function Pokemon(props){
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
            <h1>{pokemon?.name}</h1>
            <div>{pokemon.abilities.map(ability => {
                return(ability.ability.name)
            })}</div>
            <img src={pokemon?.sprites.front_default}/>
        </div>
    )
}



export default Pokemon;