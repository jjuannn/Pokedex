import { cargarDataPokemones } from "./peticiones.js";

export function mostrarCantidadPokemones(cantidadPokemones){
    document.querySelector("#cantidad-pokemones").textContent = cantidadPokemones
}
export function crearListaPokemones(pokemones){
    const $listaPokemones = document.querySelector("#lista-pokemones")
    pokemones.forEach( pokemon => {
        const { name: nombre} = pokemon
        const $link = document.createElement("a")
        $link.textContent = nombre
        $link.setAttribute("href", "#")
        $link.className = "list-group-item list-group-item-action l-pokemones"
        $link.addEventListener("click", () => {
            cargarDataPokemones(nombre)
        })
        $listaPokemones.appendChild($link)
        
    })
}
export function borrarPokemonesAnteriores(){
    const $as = document.querySelectorAll("a")
    $as.forEach( a => {
        a.remove()
    })
}
export function mostrarInfoPokemones(peso, altura, nombre, vida, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad){
    const $cuadroInformacion = document.querySelector("#datosBasicos")
    const $pesoPokemon = document.querySelector("#peso-pokemon")
    $pesoPokemon.textContent = peso
    const $alturaPokemon = document.querySelector("#altura-pokemon")
    $alturaPokemon.textContent = altura
    const $nombrePokemon = document.querySelector("#nombre-pokemon")
    $nombrePokemon.textContent = nombre
    const $vidaPokemon = document.querySelector("#hp-pokemon")
    $vidaPokemon.textContent = vida
    const $ataquePokemon = document.querySelector("#ataque-pokemon")
    $ataquePokemon.textContent = ataque
    const $defensaPokemon = document.querySelector("#defensa-pokemon")
    $defensaPokemon.textContent = defensa
    const $atEspecialPokemon = document.querySelector("#ataque-especial")
    $atEspecialPokemon.textContent = ataqueEspecial
    const $defEspecialPokemon = document.querySelector("#defensa-especial")
    $defEspecialPokemon.textContent = defensaEspecial
    const $velocidadPokemon = document.querySelector("#velocidad-pokemon")
    $velocidadPokemon.textContent = velocidad
}