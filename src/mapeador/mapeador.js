import {Pokemon} from "../entidades/pokemones.js"
import {Pagina} from "../entidades/paginas.js"

export function nuevoPokemon(pokemon){
    return new Pokemon(pokemon)
}

export function nuevaPagina(respuesta){
    return new Pagina(respuesta)
}
