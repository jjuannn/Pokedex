import { Pokemon } from "../mapeadores/mapeador.js"

export function mapearPokemon(pokemon){
    return new Pokemon(pokemon)
}