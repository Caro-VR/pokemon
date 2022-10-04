import React from 'react';
import { useParams } from "react-router-dom";
import { useState, useEffect  }  from "react";


const CardPokemones = () => {

    const { pokemonName } = useParams();
    const [ infoPokemon, setInfoPokemon ] = useState({});
    const url = `https://pokeapi.co/api/v2/pokemon`;

    
    useEffect (() => {
        const getPokemonInfo = async () => {
            const res = await fetch(url);
            const data  = await res.json();
    
            const pokemonUrl = data.results.filter(obj =>
                obj.name === pokemonName);
    
            const resInfo = await fetch(pokemonUrl[0].url);
            const dataInfo = await resInfo.json();
            console.log(dataInfo.sprites.front_default)
            return dataInfo;
        }

        const asignarPokemonEstado = async () => {
            let pokemon = await getPokemonInfo();
            console.log(pokemon.sprites.front_default)
            setInfoPokemon(pokemon)
           
        }
    
        asignarPokemonEstado();
    },[]);

    return (
       <p>{infoPokemon.sprites.front_default}</p>

           
    
    ) 
}
export default CardPokemones;