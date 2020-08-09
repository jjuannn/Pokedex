import {
  mostrarCantidadPokemones,
  crearListaPokemones,
  borrarPokemonesAnteriores
} from '../ui/ui.js'
import {
  guardarPokemon,
  buscarPokemonEnLS,
  guardarPagina
} from '../storage/storage.js'
import {
  offset
} from '../manejador/manejador.js'
import { nuevaPagina } from '../mapeador/mapeador.js'

export function obtenerInfoPokemones () {
  return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const respuestaApi = respuestaJSON
      const primeraPagina = nuevaPagina(respuestaApi)
      console.log(primeraPagina)
      guardarPagina("0", primeraPagina)
      return primeraPagina
    })
}
export function buscarPokemonEnApi(nombre) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(rta => rta.json())
      .then(rtaJSON => {
        const respuestaPokemon = rtaJSON
        return respuestaPokemon
      })
}
export function obtenerPaginaSiguienteDesdeAPI () {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { results: pokemones } = respuestaJSON
      return respuestaJSON
    })

}
export function obtenerPaginaAnteriorDesdeAPI () {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { results: pokemones } = respuestaJSON
      return respuestaJSON
    })
}
