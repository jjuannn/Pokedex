import { 
    guardarPagina,
    guardarPokemon,
    buscarPaginaEnLS,
    buscarPokemonEnLS 
} from "../storage.js"

const pagina1 = require("../../../cypress/fixtures/pagina1.json")
const bulbasaur = require("../../../cypress/fixtures/bulbasaur.json")

test("prueba guardar la info de una pagina", () => {
    
    let offset = 20
    guardarPagina(offset, pagina1)
    const paginaGuardadaEnLocal = JSON.parse(localStorage.getItem("20"))

    expect(paginaGuardadaEnLocal).toContainAllKeys(["count", "next", "previous", "results"])
})
/*
test("prueba guardar la info de un pokemon", () => {
    guardarPokemon(bulbasaur)

    const pokemonGuardadoEnLocal = JSON.parse(localStorage.getItem("bulbasaur"))
    
    expect(pokemonGuardadoEnLocal).toContainAllKeys(["name", "height", "stats", "types", "weight", "sprites"])
})

test("busca la pagina en local storage", () => {

    const paginaEnLocalStorage = buscarPaginaEnLS("20")

    expect(paginaEnLocalStorage).toEqual(pagina1)
})*/
/*
test("busca pokemon en local storage", () => {
    
    const pokemonGuardadoEnLocal = buscarPokemonEnLS("bulbasaur")

    expect(pokemonGuardadoEnLocal).toEqual(bulbasaur)
})*/
