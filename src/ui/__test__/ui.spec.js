import { mostrarCantidadPokemones} from "./ui.js"

test("actualiza la cantidad de pokemones", () => {
    document.body.innerHTML = '<strong id="cantidad-pokemones"></strong>'
    mostrarCantidadPokemones(500)
    expect(document.querySelector("#cantidad-pokemons")).toContain(500)
})
