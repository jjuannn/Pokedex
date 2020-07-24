import { 
    mostrarCantidadPokemones,
    borrarPokemonesAnteriores,
    crearListaPokemones,
    actualizarInformacion
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


test("crea la lista de pokemones", () => {
    document.body.innerHTML = '<div id="lista-pokemones"></div>'
    const $listaPokemones = document.querySelector('#lista-pokemones')
    
    const rta = {"count":964,"next":"https://pokeapi.co/api/v2/pokemon/?offset=2&limit=2","previous":null,
    "results":[{"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
    {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"}]}

    crearListaPokemones(rta.results)
    const $pokemones = document.getElementsByClassName("list-group-item list-group-item-action l-pokemones")
    console.log($pokemones)
    expect($pokemones.length).toBe(2)
})

test("actualiza la informacion de un pokemon", () => {
    document.body.innerHTML = 
    '<strong class="tipos">Agua</strong><h5 class="resultadoDatos" id="elementoNombre">Un <strong id="nombre-pokemon">...</strong> salvaje ha aparecido!</h5><img src="" id="foto-pokemon" class="oculto" alt="..."><h5 class="datos">Peso: <strong id="peso-pokemon">¿?</strong></h5><h5 class="datos">Altura: <strong id="altura-pokemon">¿?</strong></h5><h5 class="datos">HP: <strong id="hp-pokemon">¿?</strong></h5><h5 class="datos">Ataque: <strong id="ataque-pokemon">¿?</strong></h5><h5 class="datos">Defensa: <strong id="defensa-pokemon">¿?</strong></h5><h5 class="datos">Velocidad: <strong id="velocidad-pokemon">¿?</strong></h5><h5 class="datos">Ataque Especial: <strong id="ataque-especial">¿?</strong></h5> <h5 class="datos">Defensa Especial: <strong id="defensa-especial">¿?</strong> </h5><h5 class="datos" id="h5tipo">Tipo(s):</h5><div></div>'
    const $h5 = document.querySelector('#h5tipo')
    
    const infoPokemon = {"weight":69,"height":7, "name": "bulbasaur", "sprites":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "stats": [{"hp":45},{"ataque":49},{"defensa":49},{"ataque-especial":65},{"defensa-especial":65},{"velocidad":45}],
    "types":[{"slot":1,"type":{"name":"grass","url":"https://pokeapi.co/api/v2/type/12/"}},
            {"slot":2,"type":{"name":"poison","url":"https://pokeapi.co/api/v2/type/4/"}}]
    }

    actualizarInformacion(infoPokemon)

    expect(document.querySelector("#nombre-pokemon").textContent).toBe("bulbasaur")
    expect(document.querySelector("#peso-pokemon").textContent).toBe("69")
    expect(document.querySelector("#altura-pokemon").textContent).toBe("7")
    expect(document.querySelector("#hp-pokemon").textContent).toBe("45")
    expect(document.querySelector("#ataque-pokemon").textContent).toBe("49")
    expect(document.querySelector("#defensa-pokemon").textContent).toBe("49")
    expect(document.querySelector("#velocidad-pokemon").textContent).toBe("45")
    expect(document.querySelector("#ataque-especial").textContent).toBe("65")
    expect(document.querySelector("#defensa-especial").textContent).toBe("65")


})
