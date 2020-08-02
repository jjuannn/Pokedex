import { obtenerInfoPokemones } from './api/api.js'

import { obtenerNuevosPokemones, obtenerPokemonesAnteriores } from './manejador/manejador.js'

import { inicializar } from "./ui/ui.js"

const botonNext = document.querySelector('#pokemones-next')
const botonPrev = document.querySelector('#pokemones-prev')

// meter en inicializar: obtenerInfoPokemones()
inicializar()

botonPrev.addEventListener('click', () => {
  obtenerPokemonesAnteriores()
})

botonNext.addEventListener('click', () => {
  obtenerNuevosPokemones()
})

obtenerInfoPokemones()
