import { 
    mostrarCantidadPokemones,
    borrarPokemonesAnteriores,
    crearListaPokemones
} from "../ui.js"
let cantidadPokemones = 500


test("actualiza la cantidad de pokemones", () => {
    document.body.innerHTML = '<strong id="cantidad-pokemones"></strong>'
    mostrarCantidadPokemones(cantidadPokemones)
    expect(document.querySelector("#cantidad-pokemones").textContent)
    .toContain(cantidadPokemones)
})

test("borra los pokemones", () => {
    document.body.innerHTML = '<div id="container"><a>bulbasaur</a></div>'
    borrarPokemonesAnteriores()
    expect(document.querySelector("#container").textContent).toBe("")
})

/*
test("crea la lista de pokemones", () => {
    document.body.innerHTML = '<div id="lista-pokemones"></div>'
    const $listaPokemones = document.querySelector('#lista-pokemones')
    const results = [{
        0: {name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/"},
        1: {name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/"},
        2: {name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/"},
            3: {name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/"},
        }]
    crearListaPokemones(results)
    const $pokemones = document.querySelectorAll("a")
    expect($pokemones).toBe()
})
*/
