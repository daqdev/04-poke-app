import { shallowMount } from "@vue/test-utils"
import PokemonImage from '@/components/PokemonImage'

describe('pokemonImage', ()=>{

    test('debe coincidir con el snapshot', ()=>{
        
        const wrapper = shallowMount(PokemonImage, {
            props:{
                pokemonId:199,
                showPokemon:false
            }

        })
        expect(wrapper.html()).toMatchSnapshot()


        // shallowMount.
        // shallowMount
        // PokemonImage.describe
    })

    test('debe mostrar la imagen oculta y el Pokemon nro 100', ()=>{

        const wrapper = shallowMount(PokemonImage, {
            props:{
                pokemonId:100,
                showPokemon:false
            }
        })
        
        const img1 = wrapper.find('img')
        expect(img1.classes('hidden-pokemon')).toBeTruthy()
        expect(img1.attributes('src').includes('100')).toBeTruthy()
    })    
    
    test('debe mostrar el pokemon si showPokemon es true', ()=>{

        const wrapper = shallowMount(PokemonImage, {
            props:{
                pokemonId:100,
                showPokemon:true
            }
        })
        const img1 = wrapper.find('img')
        expect(img1.classes('hidden-pokemon')).toBeFalsy()
        expect(img1.classes('fade-in')).toBeTruthy()


    })
})