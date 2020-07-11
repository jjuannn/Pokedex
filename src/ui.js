import {mostrarCantidadPokemones, 
        crearListaPokemones, 
        borrarPokemonesAnteriores
} from "./cambios.js"

let offset = 0
export function obtenerNuevosPokemones(){
    offset += 20
    borrarPokemonesAnteriores()
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
    const { count: totalPokemones, results: pokemones} = respuestaJSON
    mostrarCantidadPokemones(totalPokemones)
    crearListaPokemones(pokemones)
    })
}

export function obtenerPokemonesAnteriores(){
    if(offset === 0){
        () => {}
    }else{
    offset -= 20
    borrarPokemonesAnteriores()
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
    const { count: totalPokemones, results: pokemones} = respuestaJSON
    mostrarCantidadPokemones(totalPokemones)
    crearListaPokemones(pokemones)}

)}
}
