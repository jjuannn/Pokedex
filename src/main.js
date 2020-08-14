import { obtenerNuevosPokemones, obtenerPokemonesAnteriores } from './manejador/manejador.js'

import { inicializar } from "./ui/ui.js"

const botonNext = document.querySelector('#pokemones-next')
const botonPrev = document.querySelector('#pokemones-prev')

inicializar()

botonPrev.addEventListener('click', () => {
  obtenerPokemonesAnteriores()
})

botonNext.addEventListener('click', () => {
  obtenerNuevosPokemones()
})

