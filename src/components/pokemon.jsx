import React, { useState } from "react";
import axios from "axios";

// get data from api and save to array as objects????

const Pokemon = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon/",
  });

  const listPoke = async () => {
    try {
      const response = await api.get();

      setPokemonData(response.data);

      const pList = response.data;
      console.log(pList);

      // console.log(response.data.sprites.front_default);
      // console.log(response.data.id);
    } catch (err) {
      console.log("someting went wrong", err);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    }
  };

  return (
    <>
      <h2>Pokemon</h2>
      <button className="btn btn_theme_pokemon" onClick={listPoke}>
        Muestra Pokémones cerca
      </button>

      {/* {pokemonData && <p>{pokemonData.name}</p>} */}
    </>
  );
};

export default Pokemon;
