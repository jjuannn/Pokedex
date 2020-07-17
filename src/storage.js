export function guardarPokemon(pokemon){
    localStorage.setItem( pokemon.name, JSON.stringify(pokemon))
}
export function buscarPokemonEnLS(pokemon){
    return JSON.parse(localStorage.getItem(pokemon))
}
export function guardarPagina(offset, respuesta){
    localStorage.setItem( offset, JSON.stringify(respuesta))
}
export function buscarPaginaEnLS(respuesta){
    return JSON.parse(localStorage.getItem(respuesta))
}