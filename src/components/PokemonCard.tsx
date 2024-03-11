import { PokemonInterface } from "../interfaces/PokemonInterface";

interface PokemonCardProps {
  pokemon: PokemonInterface;
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div className="pokemon-card">
      <h4>{pokemon.name.toUpperCase()}</h4>
      <p>HP: {pokemon.hp}</p>
      <p>Attack: {pokemon.attack}</p>
      <p>Defense: {pokemon.defense}</p>
    </div>
  );
};

export default PokemonCard;
