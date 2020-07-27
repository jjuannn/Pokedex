import { 
    mostrarCantidadPokemones,
    borrarPokemonesAnteriores,
    crearListaPokemones,
    actualizarInformacion
} from "../ui.js"
import {
    cuerpo
} from "../../../cypress/fixtures/body.js"
import { cargarDataPokemones } from "../../api/api.js"

const bulbasaur = require('../../../cypress/fixtures/bulbasaur.json')
const pagina1 = require("../../../cypress/fixtures/pagina1.json")

let cantidadPokemones = 500

test("actualiza la cantidad de pokemones", () => {
    document.body.innerHTML = cuerpo
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
    document.body.innerHTML = cuerpo
    const $listaPokemones = document.querySelector('#lista-pokemones')    
    crearListaPokemones(pagina1.results)
    const $pokemones = document.getElementsByClassName("list-group-item list-group-item-action l-pokemones")
    expect($pokemones.length).toBe(20)
})

test("actualiza la informacion de un pokemon", () => {
    document.body.innerHTML = cuerpo
    
    actualizarInformacion(bulbasaur)

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
