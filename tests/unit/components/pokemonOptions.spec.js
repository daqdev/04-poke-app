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

    test('debe mostras las 4 opciones', ()=>{

        const [li1, li2, li3, li4]=wrapper.findAll('li')
        // console.log(li1.html(), li2.html(), li3.html(), li4.html())
        expect(li1.html()).toContain('bulbasaur')
        expect(li2.html()).toContain('ivysaur')
        expect(li3.html()).toContain('venusaur')
        expect(li4.html()).toContain('charmander')

    })

    test ('debe emitir "selection" con sus parametros ', ()=>{



    })
})