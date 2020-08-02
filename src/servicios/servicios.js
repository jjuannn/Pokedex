import { obtenerPaginaSiguienteDesdeAPI, obtenerPaginaAnteriorDesdeAPI, buscarPokemonEnApi } from '../api/api.js'
import { offset } from '../manejador/manejador.js'
import { buscarPaginaEnLS, buscarPokemonEnLS, guardarPokemon } from '../storage/storage.js'
import { crearListaPokemones } from '../ui/ui.js'

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
    return pokemonDeLocalStorage
  } else {
    const pokemonBuscadoEnApi = await buscarPokemonEnApi(nombre)
    console.log("lo cargo desde api")
    return pokemonBuscadoEnApi
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
