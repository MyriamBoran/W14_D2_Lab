import React from "react";

const PokemonList = props => {
  const options = props.pokemons.map((pokemon, index) => {
    return (
      <option key={index} value={index}>
        {pokemon.name}
      </option>
    );
  });

  function handleChange(event) {
    const selectedIndex = event.target.value;
    props.onPokemonSelect(selectedIndex);
  }

  return (
    <select
      id="pokemon-selector"
      defaultValue="default"
      onChange={handleChange}
    >
      <option disabled value="default">
        Make your choice
      </option>
      {options}
    </select>
  );
};

export default PokemonList;
