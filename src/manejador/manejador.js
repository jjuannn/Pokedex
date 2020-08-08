/* eslint-disable no-unused-expressions */
import { borrarPokemonesAnteriores } from '../ui/ui.js'
import { cargarPaginaSiguiente, cargarPaginaAnterior } from '../servicios/servicios.js'
import { crearListaPokemones } from "../ui/ui.js"
export let offset = 0

export async function obtenerNuevosPokemones () {
  offset += 20
  borrarPokemonesAnteriores()
  crearListaPokemones(await cargarPaginaSiguiente())
}
export async function obtenerPokemonesAnteriores () {
  if (offset === 0) {
    () => { }
  } else {
    offset -= 20
    borrarPokemonesAnteriores()
    crearListaPokemones(await cargarPaginaAnterior())
  }
}
