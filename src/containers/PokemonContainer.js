import React from "react";
import PokemonList from "../components/PokemonList";
import Pokemon from "../components/Pokemon";

class PokemonContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: [],
      selectedPokemons: null
    };
    this.selectPokemon = this.selectPokemon.bind(this);
  }

  componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";
    fetch(url)
      .then(res => res.json())
      .then(pokemons => {
        this.setState({ pokemons: pokemons.results });
      });
  }

  selectPokemon(indexOfPokemon) {
    const selectedPokemons = this.state.pokemons[indexOfPokemon];
    const selectedPokemonsUrl = selectedPokemons.url;
    fetch(selectedPokemonsUrl)
      .then(res => res.json())
      .then(pokemon => {
        this.setState({ selectedPokemons: pokemon });
      });
  }

  render() {
    return (
      <div>
        <h2>Catch em all!!</h2>
        <PokemonList
          pokemons={this.state.pokemons}
          onPokemonSelect={this.selectPokemon}
        />
        <Pokemon pokemon={this.state.selectedPokemons} />
      </div>
    );
  }
}

export default PokemonContainer;
