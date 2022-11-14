import React, { useEffect, useState } from "react";
import axios from "axios";

const PokedexCard = ({ name, url }) => {
  const [details, setDetails] = useState(null);

  //**** useEffect = Mount

  // TAREA: agregar boton de shiny ---
  // TAREA: HACER AXIOS TODO CON ONCLICK ---
  useEffect(() => {
    getPokeInfo();
  }, []);

  const getPokeInfo = async () => {
    try {
      const response = await axios({
        method: "get",
        url,
      });

      const pList = response.data;
      console.log(pList);

      setDetails(pList);
    } catch (err) {
      console.log("someting went wrong", err);
      // console.log(err.response.status);
      // console.log(err.response.headers);
    }
  };

  if (details === null) {
    return null;
  }

  return (
    <article className="card">
      <div className="card card_image">
        <img src={details.sprites.front_default} alt="" />
      </div>
      <div className="card card_description">
        <h2>{name}</h2>
        <p>Peso: {details.weight}</p>
      </div>
    </article>
  );
};

export default PokedexCard;
