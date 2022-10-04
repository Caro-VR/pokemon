import React from 'react'
import { useState, useEffect }  from "react";
import { useNavigate } from "react-router-dom";
import  CardPokemones  from '../componentes/CardPokemones';


export default function Pokemones() {

  const [pokemones, setPokemones] = useState([]);
  const [pokemonSelect, setPokemonSelect] = useState("");

  const navigate = useNavigate();
  const url = `https://pokeapi.co/api/v2/pokemon`;

  const getPokemon = async () => {
    console.log('pasa por aquí');
    const res = await fetch(url);
    const { results } = await res.json();
      setPokemones(results);
  }

  const goToPokemonDetail = async () => {
    if (pokemonSelect) {
      navigate(`/cardpokemon/${pokemonSelect}`);
    }
    else {
      alert("Selecciona un Pokemon");
    } 
  };

  useEffect(() => {
    // getPokemon( `https://pokeapi.co/api/v2/pokemon`).then(res => setPokemones(res.data));
    getPokemon();
  }, []);

  return (
    <div>
       <div className="mt-5 text-center">
          <h1>Selecciona Un Pokemón</h1>
      
          <div className="col-5 col-sm-3 col-lg-2 mx-auto">
            <select value={pokemonSelect} className="form-select text-center" onChange={({ target }) => setPokemonSelect(target.value)}>
              <option value="" disabled>Pokemones</option>
              {pokemones.map(({ name }, i) =>(
              <option key={i} value={name}>{name}</option>
              ))}
            </select>
            <button className="btn btn-dark mt-3" onClick={goToPokemonDetail}>Ver Detalle</button>
          </div>
        </div>
        {/* <div className="mt-5">
          <CardPokemones pokemon={pokemones} />
        </div> */}
    </div>
  );
}
              