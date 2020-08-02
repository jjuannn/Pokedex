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

export function obtenerInfoPokemones () {
  return fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      guardarPagina('0', respuestaJSON)
      const respuesta = respuestaJSON
      return respuesta
    })
}
export function buscarPokemonEnApi(nombre) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(rta => rta.json())
      .then(rtaJSON => {
        guardarPokemon(rtaJSON)
        const respuestaPokemon = rtaJSON
        return respuestaPokemon
      })
}
export function obtenerPaginaSiguienteDesdeAPI () {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { results: pokemones } = respuestaJSON
      guardarPagina(offset, respuestaJSON)
      return pokemones
    })

}
export function obtenerPaginaAnteriorDesdeAPI () {
  return fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { results: pokemones } = respuestaJSON
      guardarPagina(offset, respuestaJSON)
      return pokemones
    })
}
