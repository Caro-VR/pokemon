import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./componentes/Navbar";
import Pokemones from "./componentes/Pokemones";
import CardPokemones from "./componentes/CardPokemones";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokemones" element={<Pokemones />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cardpokemon/:pokemonName" element={<CardPokemones />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
