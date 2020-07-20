import {
  mostrarCantidadPokemones,
  crearListaPokemones,
  actualizarInformacion,
  borrarPokemonesAnteriores
} from './ui.js'
import {
  guardarPokemon,
  buscarPokemonEnLS,
  guardarPagina
} from './storage.js'
import {
  offset
} from './manejador.js'

export function obtenerInfoPokemones () {
  fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { count: totalPokemones, results: pokemones } = respuestaJSON
      borrarPokemonesAnteriores()
      mostrarCantidadPokemones(totalPokemones)
      crearListaPokemones(pokemones)
      guardarPagina('0', respuestaJSON)
    })
}
export function cargarDataPokemones (nombre) {
  try {
    actualizarInformacion(buscarPokemonEnLS(nombre))
    console.log('cargo pokemon desde Local')
  } catch (e) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(rta => rta.json())
      .then(rtaJSON => {
        actualizarInformacion(rtaJSON)
        guardarPokemon(rtaJSON)
        console.log('Cargo pokemon desde Api y lo guardo')
      })
  }
}
export function obtenerPaginaSiguienteDesdeAPI () {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { results: pokemones } = respuestaJSON
      crearListaPokemones(pokemones)
      guardarPagina(offset, respuestaJSON)
      console.log('cargo pagina siguiente desde Api y la guardo')
    })
}
export function obtenerPaginaAnteriorDesdeAPI () {
  fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
      const { results: pokemones } = respuestaJSON
      crearListaPokemones(pokemones)
      guardarPagina(offset, respuestaJSON)
      console.log('cargo pagina anterior desde api y la guardo')
    })
}
