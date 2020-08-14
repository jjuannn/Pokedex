import {Pokemon} from "../entidades/pokemones.js"
import {Pagina} from "../entidades/paginas.js"

export function nuevoPokemon(respuesta){
    const {
        name: nombre,
        height: altura,
        types: tipos,
        sprites: { front_default: foto },
        weight: peso,
        stats: estadisticas
    } = respuesta

    const hp = estadisticas[0].base_stat
    const ataque = estadisticas[1].base_stat
    const defensa = estadisticas[2].base_stat
    const ataqueEspecial = estadisticas[3].base_stat
    const defensaEspecial = estadisticas[4].base_stat
    const velocidad = estadisticas[5].base_stat

    return new Pokemon(nombre, altura, tipos, foto, peso, hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad)
}
export function nuevaPagina(respuesta){
    const {
        count: totalPokemones,
        next: proximaPagina,
        previous: paginaAnterior,
        results: listaPokemones
    } = respuesta
    
    return new Pagina(totalPokemones, proximaPagina, paginaAnterior, listaPokemones)
}
