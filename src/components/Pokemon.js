import React from "react";

const Pokemon = ({ pokemon }) => {
  if (pokemon === null) {
    return <p>Select a pokemon.</p>;
  }

  return (
    <>
      <h2>Name: {pokemon.name}</h2>
      <h2>Height: {pokemon.height}</h2>
      <h2>Pokemon-id: {pokemon.id}</h2>
      <h2>Base_experience: {pokemon.base_experience}</h2>
    </>
  );
};

export default Pokemon;
