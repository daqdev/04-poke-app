import pokeAPI from "@/api/pokemonApi";

const getPokemons = () => {
  const pokemonArr = Array.from(Array(650));

  return pokemonArr.map((_, index) => index + 1);
};

export const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
  //   console.log(mixedPokemons);
//   getPokemonNames(mixedPokemons.slice(0, 4));

const pokemons = await getPokemonNames(mixedPokemons.slice(0,4))
//   console.table( pokemons)
  return pokemons;
};

export const getPokemonNames = async ([a,s,d,f] = []) => {
//   console.log(a, s, d, f);

//   const {data} = await pokeAPI.get(`/1`)


//   console.log(data.name)
const promises = [
    pokeAPI.get(`/${a}`),
    pokeAPI.get(`/${s}`),
    pokeAPI.get(`/${d}`),
    pokeAPI.get(`/${f}`)
]


// const resps = await Promise.all(promises)
// console.log(resps)
const [ra, rs,rd, rf] = await Promise.all(promises)

const res = [
    {id:ra.data.id, name:ra.data.name},
    {id:rs.data.id, name:rs.data.name},
    {id:rd.data.id, name:rd.data.name},
    {id:rf.data.id, name:rf.data.name}


]

return res
};

// export default getPokemonOptions;
