import { FETCH_POKEMON_LIMIT } from "../constants";

export const fetchPokemons = async () => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${FETCH_POKEMON_LIMIT}`
  );

  const pokemonData = await response.json();

  const pokemonArray = [];

  for (let i = 0; i <= pokemonData.results.length - 1; i++) {
    const res = await fetch(pokemonData.results[i]?.url);

    const data = await res.json();

    const newPokemon = {
      name: data.name,
      hp: data.stats[0].base_stat,
      attack: data.stats[1].base_stat,
      defense: data.stats[2].base_stat,
    };

    pokemonArray.push(newPokemon);
  }
  // Sorting pokemons based on the HP
  pokemonArray.sort((a, b) => b.hp - a.hp);

  return pokemonArray;
};
