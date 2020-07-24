import { cargarDataPokemones } from '../api/api.js'

export function mostrarCantidadPokemones (cantidadPokemones) {
  document.querySelector('#cantidad-pokemones').textContent = cantidadPokemones
}
export function crearListaPokemones (pokemones) {
  const $listaPokemones = document.querySelector('#lista-pokemones')
  pokemones.forEach(pokemon => {
    const { name: nombre } = pokemon
    const $link = document.createElement('a')
    $link.textContent = nombre
    $link.setAttribute('href', '#')
    $link.className = 'list-group-item list-group-item-action l-pokemones'
    $link.addEventListener('click', () => {
      cargarDataPokemones(nombre)
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

export function actualizarInformacion (rtaJSON) {
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
  $fotoPokemon.src = $foto
  $fotoPokemon.classList.remove('oculto')
  mostrarInfoPokemones(peso, altura, nombre, hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad)
}
