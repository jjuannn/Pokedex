/* eslint-disable no-unused-expressions */
import { borrarPokemonesAnteriores } from '../ui/ui.js'
import { cargarPaginaSiguiente, cargarPaginaAnterior } from '../servicios/servicios.js'
export let offset = 0

export function obtenerNuevosPokemones () {
  offset += 20
  borrarPokemonesAnteriores()
  cargarPaginaSiguiente()
}
export function obtenerPokemonesAnteriores () {
  if (offset === 0) {
    () => { }
  } else {
    offset -= 20
    borrarPokemonesAnteriores()
    cargarPaginaAnterior()
  }
}
