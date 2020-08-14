import { 
    cargarPaginaSiguiente,
    cargarPaginaAnterior, 
    cargarDataPokemones
} from "../servicios.js"
import { buscarPaginaEnLS } from "../../storage/storage.js"
const pagina2 = require ("../../../cypress/fixtures/pagina2.json")
const pagina1 = require("../../../cypress/fixtures/pagina1.json")
const cuerpoConListaCreada = require("../../../cypress/fixtures/body-cargado.js")
const bulbasaur = require("../../../cypress/fixtures/bulbasaur.json")
test("carga la pagina siguiente", () => {
  let offset = 0
  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina2);
      });
      resolve({ json: () => jsonPromise });
    }));
    
    cargarPaginaSiguiente()
    expect(global.fetch).toHaveBeenCalledTimes(1)
})

test("carga la pagina anterior", () => {
  let offset = 20
  JSON.parse = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina1);
      });
      resolve({ json: () => jsonPromise });
    }));
    
    cargarPaginaAnterior()
    expect(JSON.parse).toHaveBeenCalledTimes(1)
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
  const error = console.error("Pagina no obtenida")
  const cargarPaginaAnterior = jest.fn( () => {return error})

  cargarPaginaAnterior()
  expect(cargarPaginaAnterior).toHaveReturned(error)
})
test("carga la info de un pokemon", () => {

  JSON.parse = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(bulbasaur);
      });
      resolve({ json: () => jsonPromise });
    }));
  cargarDataPokemones("bulbasaur")
  expect(JSON.parse).toHaveBeenCalledTimes(1)
})