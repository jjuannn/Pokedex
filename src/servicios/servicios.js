import { obtenerPaginaSiguienteDesdeAPI, obtenerPaginaAnteriorDesdeAPI, buscarPokemonEnApi } from '../api/api.js'
import { offset } from '../manejador/manejador.js'
import { buscarPaginaEnLS, buscarPokemonEnLS, guardarPokemon } from '../storage/storage.js'
import { crearListaPokemones } from '../ui/ui.js'
import { mapearPokemon } from '../entidades/pokemones.js'

export async function cargarPaginaSiguiente () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    if(paginaLS){
      console.log("cargo ps desde ls")
    }
    return paginaLS.results
  } catch (e) {
    const proximaPagina = await obtenerPaginaSiguienteDesdeAPI()
    console.log("cargo siguiente desde api")
    return proximaPagina
  }  
}
export async function cargarDataPokemones(nombre){
  const pokemonDeLocalStorage = buscarPokemonEnLS(nombre)
  if(pokemonDeLocalStorage){
    console.log("lo cargo desde ls")
    const clasePokemon = mapearPokemon(pokemonDeLocalStorage) 
    return pokemonDeLocalStorage
  } else {
    const pokemonBuscadoEnApi = await buscarPokemonEnApi(nombre)
    const pokemonClase = mapearPokemon(pokemonBuscadoEnApi)
    console.log("lo cargo desde api")
    return pokemonBuscadoEnApi
  }
}

function buscarInfoPokemones(nombre){
  try{
    const pokemonDeLocalStorage = buscarPokemonEnLS(nombre)
    mapearPokemon(pokemonDeLocalStorage)
    return pokemonDeLocalStorage
  } catch(e){
    const pokemonDeAPI = buscarPokemonEnApi(nombre)
    mapearPokemon(pokemonDeAPI)
    return pokemonDeAPI
  }
}
export async function cargarPaginaAnterior () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    if(paginaLS){
      console.log("Anterior buscada de LS")
    }
    return paginaLS.results
  } catch (e) {
    const anteriorPagina = await obtenerPaginaAnteriorDesdeAPI()
    console.log("cargo anterior desde api")
    return anteriorPagina
  }
}
