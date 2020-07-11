import {
    mostrarCantidadPokemones,
    crearListaPokemones,
    mostrarInfoPokemones
} from "./cambios.js"

export function obtenerInfoPokemones(){
    fetch("https://pokeapi.co/api/v2/pokemon")
    .then(respuesta => respuesta.json())
    .then(respuestaJSON => {
        const { count: totalPokemones, results: pokemones} = respuestaJSON
        mostrarCantidadPokemones(totalPokemones)
        crearListaPokemones(pokemones)
    })
}
export function cargarDataPokemones(nombre){
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(rta => rta.json())
    .then(rtaJSON  => {
        actualizarInformacion(rtaJSON)                
    })
}
function actualizarInformacion(rtaJSON){
        const peso = rtaJSON.weight
        const altura = rtaJSON.height
        const nombre = rtaJSON.name
        const $foto = Object.values(rtaJSON.sprites)[4]
        const hp = Object.values(rtaJSON.stats[0])[0]
        const ataque = Object.values(rtaJSON.stats[1])[0]
        const defensa = Object.values(rtaJSON.stats[2])[0]
        const ataqueEspecial = Object.values(rtaJSON.stats[3])[0]
        const defensaEspecial = Object.values(rtaJSON.stats[4])[0]
        const velocidad = Object.values(rtaJSON.stats[5])[0]
        const tipoPokemon = rtaJSON.types
        const $strongs = document.querySelectorAll(".tipos")
        $strongs.forEach( (tipo) => {
            tipo.remove()
        })
        tipoPokemon.forEach( (tipo) => {
            const $tipo = tipo.type.name
            const $elementoTipoPokemon = document.createElement("strong")
            $elementoTipoPokemon.textContent = $tipo
            const $divs = document.createElement("div")
            const $h5 = document.querySelector("#h5tipo")
            $h5.appendChild($divs)
            $elementoTipoPokemon.classList.add("tipos")
            $divs.appendChild($elementoTipoPokemon)
        })
        const $fotoPokemon = document.querySelector("#foto-pokemon")
        $fotoPokemon.src = $foto
        $fotoPokemon.classList.remove("oculto")
        mostrarInfoPokemones(peso, altura, nombre, hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad)
}