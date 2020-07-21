import { obtenerInfoPokemones } from './api/api.js'

import { obtenerNuevosPokemones, obtenerPokemonesAnteriores } from './manejador/manejador.js'

const botonNext = document.querySelector('#pokemones-next')
const botonPrev = document.querySelector('#pokemones-prev')

obtenerInfoPokemones()

botonPrev.addEventListener('click', () => {
  obtenerPokemonesAnteriores()
})

botonNext.addEventListener('click', () => {
  obtenerNuevosPokemones()
})

obtenerInfoPokemones()
