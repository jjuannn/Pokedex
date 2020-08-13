import { obtenerPaginaSiguienteDesdeAPI,  buscarPokemonEnApi } from '../api/api.js'
import { offset } from '../manejador/manejador.js'
import {
    buscarPaginaEnLocalStorage,
    buscarPokemonEnLocalStorage,
    guardarPokemon,
    guardarPagina 
} from '../storage/storage.js'
import { nuevoPokemon, nuevaPagina} from '../mapeador/mapeador.js'

export async function cargarPaginaSiguiente () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    return paginaLS
  } catch (e) {
    const respuestaApi = await obtenerPaginaSiguienteDesdeAPI(offset)
    const proximaPagina = nuevaPagina(respuestaApi)
    guardarPagina(offset, proximaPagina)
    return proximaPagina
  }  
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
    const paginaLS = buscarPaginaEnLocalStorage(offset)
    return paginaLS
}

