import {obtenerInfoPokemones} from "./api.js"

import {obtenerNuevosPokemones, obtenerPokemonesAnteriores} from "./manejador.js"

const botonNext = document.querySelector("#pokemones-next")
const botonPrev = document.querySelector("#pokemones-prev")

obtenerInfoPokemones()

botonPrev.addEventListener( "click", () => {
    obtenerPokemonesAnteriores()
})

botonNext.addEventListener( "click", () => {
    obtenerNuevosPokemones()
})

obtenerInfoPokemones()