import {
  guardarPagina
} from '../storage/storage.js'
import { nuevaPagina } from '../mapeador/mapeador.js'

const baseURL = "https://pokeapi.co/api/v2/pokemon/"

export function obtenerInfoPokemones () {
  return fetch(`${baseURL}?offset=0&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaApi => {
      const primeraPagina = nuevaPagina(respuestaApi)
      guardarPagina("0", primeraPagina)
      return primeraPagina
    })
}
export function buscarPokemonEnApi(nombre) {
    return fetch(`${baseURL}${nombre}`)
      .then(respuesta => respuesta.json())
}
 
export function obtenerPaginaSiguienteDesdeAPI(offset) {
  return fetch(`${baseURL}?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
}

