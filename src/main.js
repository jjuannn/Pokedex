import {obtenerInfoPokemones} from "./peticiones.js"

import {obtenerNuevosPokemones, obtenerPokemonesAnteriores} from "./ui.js"

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