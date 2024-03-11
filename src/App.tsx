import { useState, useEffect, useRef } from "react";
import Loading from "./components/Loading";
import PokemonList from "./components/PokemonList";
import { PokemonInterface } from "./interfaces/PokemonInterface";
import { FETCH_POKEMON_LIMIT } from "./constants";
import ErrorMessage from "./components/ErrorMessage";
import { fetchPokemons } from "./utils/fetchPokemons";
import "./styles/styles.css";

const App = () => {
  const [pokemons, setPokemons] = useState<PokemonInterface[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const fetchPokemonsRef = useRef<boolean>(false);

  useEffect(() => {
    // Prevents the useEffect running twice in the react strict mode
    if (fetchPokemonsRef.current === true) return;

    const cachedPokemons = JSON.parse(localStorage.getItem("pokemons") ?? "[]");

    if (
      cachedPokemons.length > 0 &&
      cachedPokemons.length === FETCH_POKEMON_LIMIT
    ) {
      setPokemons(cachedPokemons);
      return;
    }

    const fetchPokemonData = async () => {
      try {
        setIsLoading(true);
        const pokemonArray = await fetchPokemons();
        // Setting pokemon data in localStorage for caching
        localStorage.setItem("pokemons", JSON.stringify(pokemonArray));
        setPokemons(pokemonArray);
      } catch (error) {
        console.error("Error", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemonData();

    return () => {
      fetchPokemonsRef.current = true;
    };
  }, []);

  if (isError) {
    return <ErrorMessage />;
  }

  return (
    <main className="container">
      <h2>Pokedex App</h2>

      {isLoading ? <Loading /> : <PokemonList pokemons={pokemons} />}
    </main>
  );
};

export default App;
