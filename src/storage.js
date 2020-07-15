export function guardarPokemon(pokemon){
    localStorage.setItem( pokemon.name, JSON.stringify(pokemon))
}
export function parsearDeLocalStorage(pokemon){
    return JSON.parse(localStorage.getItem(pokemon))
}
export function guardarPagina(offset, respuesta){
    localStorage.setItem( offset, JSON.stringify(respuesta))
}
export function parsearPagina(respuesta){
    return JSON.parse(localStorage.getItem(respuesta))
}