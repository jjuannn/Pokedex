import {
    mostrarCantidadPokemones,
    crearListaPokemones,
    mostrarInfoPokemones,
    actualizarInformacion
} from "./ui.js"
import { 
    guardarPokemon,
    parsearDeLocalStorage,
    guardarPagina,
    parsearPagina
} from "./storage.js"
import{
    offset
} from "./manejador.js"

export function obtenerInfoPokemones(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        const { count: totalPokemones, results: pokemones} = respuestaJSON
        mostrarCantidadPokemones(totalPokemones)
        crearListaPokemones(pokemones)
    })
}
export function cargarDataPokemones(nombre){
    try{
        actualizarInformacion(parsearDeLocalStorage(nombre))
        console.log("cargo pokemon desde Local")
    }catch(e){
        fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
        .then(rta => rta.json())
        .then(rtaJSON  => {
            actualizarInformacion(rtaJSON)
            guardarPokemon(rtaJSON)
            console.log("Cargo pokemon desde Api y lo guardo")          
        })
    }
}
export function obtenerPaginaSiguiente () {
    try{
        let paginaLS = parsearPagina(offset)
        crearListaPokemones(paginaLS.results)
        console.log("cargo pagina siguiente desde LS")
    }catch(e){
        fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        .then(respuesta => respuesta.json())
        .then(respuestaJSON => {
            const { results: pokemones} = respuestaJSON
            crearListaPokemones(pokemones)
            guardarPagina(offset, respuestaJSON)
            console.log("cargo pagina siguiente desde Api y la guardo")
        })
    }
}
export function obtenerPaginaAnterior() {
   try{
        let paginaLS = parsearPagina(offset)
        crearListaPokemones(paginaLS.results)
        console.log("cargo pagina anterior desde ls")
   } catch(e){
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        const { count: totalPokemones, results: pokemones} = respuestaJSON
        crearListaPokemones(pokemones)
        guardarPagina(offset, respuestaJSON)
        console.log("cargo pagina anterior desde api y la guardo")
        })
    }
}
