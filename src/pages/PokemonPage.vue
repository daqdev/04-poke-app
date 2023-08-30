<template>
<h1 v-if="!pokemon">Cargando ...</h1>

    <div v-else>
        <h1 v-if="!respondio">Quien es este Pokemon???</h1>
        <h1 v-if="respondio">{{ resultado }} {{ pokemon.name }}</h1>

        <pokemon-image :pokemonId="pokemon.id" :showPokemon="showPokemon" />
        <pokemon-options :pokemons="pokemonArr" @selection="checkAnswer"/>

        <button @click="newGame">Nuevo Juego</button>
    </div>

</template>

<script>
import PokemonImage from '@/components/PokemonImage.vue'
import PokemonOptions from '@/components/PokemonOptions.vue'
import { getPokemonOptions } from '@/helpers/getPokemonOptoins'

getPokemonOptions()

export default {
    components: { PokemonImage, PokemonOptions },
    data() {
        return {
            pokemonArr: [],
            pokemon : null,
            showPokemon:false,
            respondio:false,
            resultado:'Todavia no respondio!'
        }
    },
    methods:{
        async mixPokemonArray(){
            this.pokemonArr= await getPokemonOptions()

            const rndInt = Math.floor(Math.random()*4)

            this.pokemon=this.pokemonArr[rndInt]
            console.log( rndInt)
        },
        checkAnswer(pokemonId){
            this.respondio=true
            this.resultado=pokemonId===this.pokemon.id?'CORRECTO! ':'NOOOO! era '
            this.showPokemon=true
        },
        newGame(){
            this.pokemon=null
            this.showPokemon=false
            this.respondio=false
            this.mixPokemonArray()
        }
    },
    mounted(){
        this.mixPokemonArray()

    }
}
</script>


