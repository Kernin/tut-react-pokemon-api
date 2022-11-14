import React, { useState } from "react";
import axios from "axios";
import PokedexCard from "./PokedexCard";

// get data from api and save to array as objects????

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
  });

  const listPoke = async () => {
    try {
      const response = await api.get();

      const pList = response.data.results;
      console.log(pList);

      setPokemonData(
        pList.map((pokemon) => (
          <PokedexCard
            key={pokemon.name}
            name={pokemon.name}
            url={pokemon.url}
          />
        ))
      );
    } catch (err) {
      console.log("someting went wrong", err);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    }
  };

  // we want to make a pokemon object... that can be clicked and show details
  // probably we'll do it as we get the pokemon list, so we can show a link instead of text

  return (
    <>
      <h2>Pokemon</h2>
      <button className="btn btn_theme_pokemon" onClick={listPoke}>
        Muestra Pokémones cerca
      </button>

      {pokemonData && <> {pokemonData}</>}
    </>
  );
};

export default Pokemon;
