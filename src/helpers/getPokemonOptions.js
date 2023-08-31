import pokeAPI from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));

  return pokemonArr.map((_, index) => index + 1);
};

export const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);

  const pokemons = await getPokemonNames(mixedPokemons.slice(0, 4));
  return pokemons;
};

export const getPokemonNames = async ([a, s, d, f] = []) => {
  const promises = [
    pokeAPI.get(`/${a}`),
    pokeAPI.get(`/${s}`),
    pokeAPI.get(`/${d}`),
    pokeAPI.get(`/${f}`),
  ];

  const [ra, rs, rd, rf] = await Promise.all(promises);

  const res = [
    { id: ra.data.id, name: ra.data.name },
    { id: rs.data.id, name: rs.data.name },
    { id: rd.data.id, name: rd.data.name },
    { id: rf.data.id, name: rf.data.name },
  ];

  return res;
};
