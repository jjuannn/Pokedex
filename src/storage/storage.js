export function guardarPokemon(pokemon) {
  localStorage.setItem(pokemon.nombre, JSON.stringify(pokemon))
}
export function buscarPokemonEnLocalStorage (pokemon) {
  return JSON.parse(localStorage.getItem(pokemon))
}
export function guardarPagina(offset, respuesta) {
  localStorage.setItem(offset, JSON.stringify(respuesta))
}
export function buscarPaginaEnLocalStorage(respuesta) {
  return JSON.parse(localStorage.getItem(respuesta))
}
