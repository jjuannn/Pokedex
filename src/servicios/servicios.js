import { obtenerPaginaSiguienteDesdeAPI, obtenerPaginaAnteriorDesdeAPI } from '../api/api.js'
import { offset } from '../manejador/manejador.js'
import { buscarPaginaEnLS } from '../storage/storage.js'
import { crearListaPokemones } from '../ui/ui.js'

export function cargarPaginaSiguiente () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    crearListaPokemones(paginaLS.results)
    console.log('cargo pagina siguiente desde LS')
  } catch (e) {
    obtenerPaginaSiguienteDesdeAPI()
  }
}

export function cargarPaginaAnterior () {
  try {
    const paginaLS = buscarPaginaEnLS(offset)
    crearListaPokemones(paginaLS.results)
    console.log('cargo pagina anterior desde ls')
  } catch (e) {
    obtenerPaginaAnteriorDesdeAPI()
  }
}
