import { obtenerPaginaSiguienteDesdeAPI,  buscarPokemonEnApi, obtenerPrimerPaginaDesdeAPI } from '../api/api.js'
import { offset } from '../manejador/manejador.js'
import {
    buscarPaginaEnLocalStorage,
    buscarPokemonEnLocalStorage,
    guardarPokemon,
    guardarPagina 
} from '../storage/storage.js'
import { nuevoPokemon, nuevaPagina} from '../mapeador/mapeador.js'

export async function obtenerPrimerPagina(){
    let primerPagina
    primerPagina = buscarPaginaEnLocalStorage("0")
    if(primerPagina){
      return primerPagina
    } else {
      const respuestaApi = await obtenerPrimerPaginaDesdeAPI()
      primerPagina = nuevaPagina(respuestaApi)
      guardarPagina("0", primerPagina)
    }
    return primerPagina
}

export async function cargarPaginaSiguiente () {
  let siguientePagina
  siguientePagina = buscarPaginaEnLocalStorage(offset)
    if(siguientePagina){
      return siguientePagina
    } else{
    const respuestaApi = await obtenerPaginaSiguienteDesdeAPI(offset)
    siguientePagina = nuevaPagina(respuestaApi)
    guardarPagina(offset, siguientePagina) 
  } 
  return siguientePagina 
}
export async function cargarPokemon(nombre){
  let pokemon
  pokemon = buscarPokemonEnLocalStorage(nombre)
  if(pokemon){
    return pokemon
  } else {
    const respuestaApi = await buscarPokemonEnApi(nombre)
    pokemon = nuevoPokemon(respuestaApi)
    guardarPokemon(pokemon)
  }
  return pokemon
}
export async function cargarPaginaAnterior () {
    return buscarPaginaEnLocalStorage(offset)
}
