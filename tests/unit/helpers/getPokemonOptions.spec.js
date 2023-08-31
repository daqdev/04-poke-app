import { getPokemonNames, getPokemonOptions, getPokemons } from "@/helpers/getPokemonOptions"

describe('getPokemonOptions',()=>{

    test('debe devolver un array de numeros',()=>{

        const pokemons = getPokemons()
        expect(pokemons.length).toBe(650)
        expect(pokemons[0]).toBe(1)
        expect(pokemons[500]).toBe(501)
        expect(pokemons[649]).toBe(650)
    }),
    test('debe retornar un array de 4 pokemon con sus nombres', async() => { 
        const [un, dos, tre, cua] = await getPokemonNames([1,2,3,4])
        console.log(un, dos, tre, cua)
        expect(un.name).toBe('bulbasaur')
        expect(dos.name).toBe('ivysaur')
        expect(tre.name).toBe('venusaur')
        expect(cua.name).toBe('charmander')
     })
    test('getPokemonOptions debe retornar un arreglo mezclado', async () => { 

        const pkOptions = await getPokemonOptions()
        console.log(pkOptions)
        expect(pkOptions.length).toBe(4)

        expect(pkOptions).toEqual([
            {
                name: expect.any(String),
                id:expect.any(Number)
            },{
                name: expect.any(String),
                id:expect.any(Number)
            },{
                name: expect.any(String),
                id:expect.any(Number)
            },{
                name: expect.any(String),
                id:expect.any(Number)
            },  

        ])
     })
})