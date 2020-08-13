import { cargarPokemon } from '../servicios/servicios.js'
import { buscarPokemonEnLocalStorage } from '../storage/storage.js'
import { buscarPokemonEnApi, obtenerInfoPokemones } from '../api/api.js'

export async function inicializar(){
  const infoPokemones = await obtenerInfoPokemones()
  borrarPokemonesAnteriores()
  mostrarCantidadPokemones(infoPokemones.totalPokemones)
  crearListaPokemones(infoPokemones)
}
export function mostrarCantidadPokemones (cantidadPokemones) {
  document.querySelector('#cantidad-pokemones').textContent = cantidadPokemones
}
export async function crearListaPokemones(pokemones) {
  const $listaPokemones = document.querySelector('#lista-pokemones')
  // PREGUNTAR SI listadoPokemones ESTA BIEN
  const listadoPokemones = pokemones.listaPokemones
    listadoPokemones.forEach(pokemon => {
    const { name: nombre } = pokemon
    const $link = document.createElement('a')
    $link.textContent = nombre
    $link.setAttribute('href', '#')
    $link.className = 'list-group-item list-group-item-action l-pokemones'
    $link.classList.add(nombre)
    $link.addEventListener('click', async () => {
      actualizarInformacion(await cargarPokemon(nombre))
    })
    $listaPokemones.appendChild($link)
  })
}
export function borrarPokemonesAnteriores () {
  const $as = document.querySelectorAll('a')
  $as.forEach(a => {
    a.remove()
  })
}
function mostrarInfoPokemones (peso, altura, nombre, vida, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad) {
  const $pesoPokemon = document.querySelector('#peso-pokemon')
  $pesoPokemon.textContent = peso
  const $alturaPokemon = document.querySelector('#altura-pokemon')
  $alturaPokemon.textContent = altura
  const $nombrePokemon = document.querySelector('#nombre-pokemon')
  $nombrePokemon.textContent = nombre
  const $vidaPokemon = document.querySelector('#hp-pokemon')
  $vidaPokemon.textContent = vida
  const $ataquePokemon = document.querySelector('#ataque-pokemon')
  $ataquePokemon.textContent = ataque
  const $defensaPokemon = document.querySelector('#defensa-pokemon')
  $defensaPokemon.textContent = defensa
  const $atEspecialPokemon = document.querySelector('#ataque-especial')
  $atEspecialPokemon.textContent = ataqueEspecial
  const $defEspecialPokemon = document.querySelector('#defensa-especial')
  $defEspecialPokemon.textContent = defensaEspecial
  const $velocidadPokemon = document.querySelector('#velocidad-pokemon')
  $velocidadPokemon.textContent = velocidad
}

function actualizarInformacion(pokemon){
  const peso = pokemon.peso
  const altura = pokemon.altura
  const nombre = pokemon.nombre
  const foto = pokemon.foto
  const hp = pokemon.hp
  const ataque = pokemon.ataque
  const defensa = pokemon.defensa
  const ataqueEspecial = pokemon.ataqueEspecial
  const defensaEspecial = pokemon.defensaEspecial
  const velocidad = pokemon.velocidad
  const tipoPokemon = pokemon.tipos
  const $strongs = document.querySelectorAll('.tipos')
  $strongs.forEach((tipo) => {
    tipo.remove()
  })
  tipoPokemon.forEach((tipo) => {
    const $tipo = tipo.type.name
    const $elementoTipoPokemon = document.createElement('strong')
    $elementoTipoPokemon.textContent = $tipo
    const $divs = document.createElement('div')
    const $h5 = document.querySelector('#h5tipo')
    $h5.appendChild($divs)
    $elementoTipoPokemon.classList.add('tipos')
    $divs.appendChild($elementoTipoPokemon)
  })
  const $fotoPokemon = document.querySelector('#foto-pokemon')
  $fotoPokemon.src = foto
  $fotoPokemon.classList.remove('oculto')
  mostrarInfoPokemones(peso, altura, nombre, hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad)
}
