import pokeAPI from "@/api/pokemonApi";

describe('pokemonApi', ()=>{

    test('axios debe estar configurado con la api de pokemon', ()=>{

        console.log('TEST1');
        // console.log(pokeAPI);
        expect(pokeAPI.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')

    })

})



