import { PokemonInterface } from "../interfaces/PokemonInterface";
import PokemonCard from "./PokemonCard";

interface PokemonListProps {
  pokemons: PokemonInterface[];
}

const PokemonList = ({ pokemons }: PokemonListProps) => {
  return (
    <div>
      <p>Here are the list of pokemons that are sorted by their HP value:</p>
      <div className="pokemon-wrapper">
        {pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
