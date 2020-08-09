import { obtenerPaginaSiguienteDesdeAPI, obtenerPaginaAnteriorDesdeAPI, buscarPokemonEnApi } from '../api/api.js'
import { offset } from '../manejador/manejador.js'
import { buscarPaginaEnLS, buscarPokemonEnLS, guardarPokemon, guardarPagina } from '../storage/storage.js'
import { crearListaPokemones } from '../ui/ui.js'
import { nuevoPokemon, nuevaPagina } from '../mapeador/mapeador.js'

export async function cargarPaginaSiguiente () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    if(paginaLS){
      console.log("cargo ps desde ls")
    }
    return paginaLS.listaPokemones
  } catch (e) {
    const respuestaApi = await obtenerPaginaSiguienteDesdeAPI()
    console.log("cargo desde api")
    const proximaPagina = nuevaPagina(respuestaApi)
    guardarPagina(offset, proximaPagina)
    return proximaPagina.listaPokemones
  }  
}
export async function cargarDataPokemones(nombre){
  let pokemon
  pokemon = buscarPokemonEnLS(nombre)
  if(pokemon){
    console.log("lo cargo desde ls")
    return pokemon
  } else {
    let respuestaApi = await buscarPokemonEnApi(nombre)
    pokemon = nuevoPokemon(respuestaApi)
    guardarPokemon(pokemon)
    console.log("lo cargo desde api")
    return pokemon
  }
}
export async function cargarPaginaAnterior () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    if(paginaLS){
      console.log("Anterior buscada de LS")
    }
    return paginaLS.listaPokemones
  } catch (e) {
    const anteriorPagina = await obtenerPaginaAnteriorDesdeAPI()
    //const anteriorPagina = nuevaPagina(respuestaApi)
    console.log("cargo anterior desde api")
    return anteriorPagina.listaPokemones
  }
}
