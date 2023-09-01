import { shallowMount } from "@vue/test-utils";
import PokemonOptions from '@/components/PokemonOptions'
import { pokemonzMok } from "../mocks/pokemons.mock";

describe('pokemon-options', ()=>{

    let wrapper
    beforeEach(()=>{

        wrapper = shallowMount(PokemonOptions, {
            props:{
                pokemons:pokemonzMok
            }
        })

    })

    test('que haga match con el snapshot', ()=>{

        // console.log(pokemonzMok)
        // console.log(wrapper.html())
        
        expect(wrapper.html()).toMatchSnapshot()
    })
})