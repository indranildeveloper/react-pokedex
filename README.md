# Pokedex app

## Description

This is a Pokedex application built with `React` and `TypeScript` with the help of [PokeAPI](https://pokeapi.co/).

After fetching the data for the pokemons the application will sort the pokemons based on `HP` of the fetched pokemons from highest to lowest.

## Approach

While building the application I found that the [PokeAPI](https://pokeapi.co/) does not provide us the whole pokemon data for each pokemon in a single api call. Instead it provides an `url` for each pokemon where we are able to get the data for the pokemon.

So I created a loop that is run for all of the pokemon urls, which we get from `https://pokeapi.co/api/v2/pokemon`. Then store the necessary data which is needed for show in the webpage. Then created an array of objects containing all the data of the pokemons. Then sort the pokemons based on the `HP` of the pokemons that are in the array. Then I show the data for all the pokemons in a react component.

Also I realized if we want to fetch `40` pokemons then in each refresh the application has to make `40` requests, which can be optimized. So I have implemented a simple data caching mechanism. I am storing the array of the sorted pokemons in `localStorage`. If the data exists in `localStorage` then we can get the data from the `localStorage`. In that way we do not need to make api calls again and again to fetch the pokemon data.

If we are visiting the application first time or we change the `FETCH_POKEMON_LIMIT` inside of the `/src/constants/index.ts` file then we are fetching the data again.

## Run it locally

1. Go to the root of the project and then run:

```
npm install
```

It will install all the necessary dependencies which are required for the project.

2. Then from the root of the project run:

```
npm run dev
```

This command will start the application locally at port `http://localhost:3000`

3. By default only `40` pokemons will be fetched from the api. If you want to fetch more pokemons then go to the `/src/constants` folder and edit the `index.ts` file. Suppose we want to fetch `100` pokemons then we have to set `FETCH_POKEMON_LIMIT` to `100`.

```typescript
export const FETCH_POKEMON_LIMIT = 100;
```

## Screenshot

![Screenshot](/screenshots/screenshot.png)
