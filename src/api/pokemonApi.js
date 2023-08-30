import axios from "axios";



const pokeAPI = axios.create({

    baseUrl:'https://pokeapi.co/api/v2/pokemon'



})


export default pokeAPI

