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

    function DetallePokemon() {
        return (
            <main className="flex">
                <article className="card">
                    <img src="https://card-poke-simple.netlify.app/images/bg-pattern-card.svg" alt="imagen header card" class="card-header" />
                    <div className="card-body">
                        <img className="card-body-img" src={infoPokemon.sprites.other.dream_world.front_default} alt="imagen" />
                        <h1 className="card-body-title">{infoPokemon.name}</h1>
                        <span className="card-body-title-span">HP {infoPokemon.stats[0].base_stat}</span>
                        <p className="card-body-text">Experiencia {infoPokemon.base_experience}</p>
                        <h5>Descripción</h5>
                    
                    </div>
                    <div className="card-footer">
                        <div className="card-footer-social">
                            <div className="card-footer">
                                <h5 className="card-footer-title">Ataque</h5>
                                <p className="card-text">{infoPokemon.stats[1].base_stat}</p>
                            </div>
                        </div>
                        <div className="card-footer-social">
                            <div className="card-footer">
                                <h5 className="card-footer-title">Defensa</h5>
                                <p className="card-text">{infoPokemon.stats[2].base_stat}</p>
                            </div>
                        </div>
                        <div className="card-footer-social">
                            <div className="card-footer">
                                <h5 className="card-footer-title">Especial</h5>
                                <p className="card-text">{infoPokemon.stats[3].base_stat}</p>
                            </div>
                        </div>
                    </div>
                </article>
            </main>
        )
    }
    

    return (
       <div>{infoPokemon.sprites?<DetallePokemon />:''}</div>
    ) 
}
export default CardPokemones;