import {obtenerNuevosPokemones, offset, obtenerPokemonesAnteriores} from "../manejador.js"
import { crearListaPokemones, borrarPokemonesAnteriores } from "../../ui/ui.js";
import { cargarPaginaSiguiente, cargarPaginaAnterior } from "../../servicios/servicios.js";
import { cuerpo } from "../../../cypress/fixtures/body.js"
import { cuerpoConListaCreada } from "../../../cypress/fixtures/body-cargado.js"
const pagina2 = require('../../../cypress/fixtures/pagina2.json')
const pagina1 = require("../../../cypress/fixtures/pagina1.json")


it("obtiene la pagina siguiente", () => {
  document.body.innerHTML = cuerpoConListaCreada
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina2);
      });
      resolve({ json: () => jsonPromise });
  }));

  obtenerNuevosPokemones()
  expect(global.fetch).toBeCalledTimes(1)
  expect(global.fetch).resolves
  expect(offset).toBe(20)
})

it("obtiene la pagina anterior", () => {
  document.body.innerHTML = cuerpo
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina1);
      });
      resolve({ json: () => jsonPromise });
  }));

  global.console.log = jest.fn()
    .mockImplementationOnce(() => {
      console.log('cargo pagina siguiente desde Api y la guardo')
  })

  obtenerPokemonesAnteriores()
  expect(global.fetch).toBeCalledTimes(1)
  expect(global.fetch).resolves
  expect(offset).toBe(0)
})

test("intenta obtener pagina anterior con offset 0", () => {
    document.body.innerHTML = cuerpoConListaCreada

    global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina1);
      });
      resolve({ json: () => jsonPromise });
  }));

  obtenerPokemonesAnteriores()
  expect(offset).toBe(0)
})
// PREGUNTAR PORQUE LAS FUNCIONES DE obtenerPokemonesAnteriores NO SE PUEDEN CHEQUEAR
// MOCK ?¿?¿?¿?
// TERMINAR PORQUE POKEMONES.length DA 0
// const $pokemones = document.getElementsByClassName("list-group-item list-group-item-action l-pokemones")
// expect($pokemones.length).toBe(20)

// PREGUNTAR PORQUE LAS FUNCIONES DENTRO DE obtenerNuevosPokemones NO SE PUEDEN CHEQUEAR
// MOCK ?¿?¿?¿?
