import React, { useEffect, useState } from 'react';
import './App.css';
import PokemonCard from "./PokemonCard";
import axios from "axios";

function App() {
    const [pokenames, setPokenames] = useState(null);

     const [offset, setOffset] = useState(0);
    // useEffect -> api pokemon -> [{ name: "bulbasaur"}, { name: "ivysaur"}]
    useEffect(() => {
        setPokenames(null) //er moet een nulwaarde meegegeven worden aan setPokenames
        console.log("fetch names here");

        async function fetchNames() {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`
            );
            console.log(response.data.results);
            setPokenames(response.data);
        }
        fetchNames();
    }, [offset]);

    console.log(pokenames);
if (!pokenames) {
    return <h3>Loading</h3>
}


    return (
        <>
            <div className="foto">
            <header>


            </header>
                <div className="navigatie">

                    <button
                    disabled={!pokenames.previous}
                    onClick={() => setOffset(offset => offset - 20)}>
                    Previous page</button>

                    <button
                    disabled={!pokenames.next}
                    onClick={() => setOffset(offset => offset + 20)}>
                    Next page</button>

                </div>
            </div>




                <div className="card-container">
                    {/* pokemons.map =>  <PokemonCard nameOfPokemon={pokemon.name} />*/}
                    {/*<PokemonCard nameOfPokemon="jigglypuff" />*/}
                    {/* <PokemonCard nameOfPokemon="jigglypuff" />
          <PokemonCard nameOfPokemon="diglett" />
          <PokemonCard nameOfPokemon="drowzee" />
          <PokemonCard nameOfPokemon="drowzee" /> */}
                    {pokenames.results.map((pokemon, i) => {
                        return <PokemonCard key={i} nameOfPokemon={pokemon.name}/>;
                    })}
        </div>
        </>
    );
}
export default App;