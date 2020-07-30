import { 
    obtenerInfoPokemones,
    obtenerPaginaAnteriorDesdeAPI,
    obtenerPaginaSiguienteDesdeAPI, 
    cargarDataPokemones
} from "../api.js"
import { actualizarInformacion, guardarPokemon} from "../../ui/ui.js"

const pagina1 = require ("../../../cypress/fixtures/pagina1.json")
const pagina2 = require("../../../cypress/fixtures/pagina2.json")
const bulbasaur = require("../../../cypress/fixtures/bulbasaur.json")


test("obtiene la info de los pokemones", () => {
    global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina1);
      });
      resolve({ json: () => jsonPromise });
  }));
  
  obtenerInfoPokemones()
  // preguntar por las funciones dentro de obtenerInfoPokemones
  expect(global.fetch).toHaveBeenCalledTimes(1)
})

test("obtiene la proxima pagina", () => {
    global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina2);
      });
      resolve({ json: () => jsonPromise });
    }));
    
    obtenerPaginaSiguienteDesdeAPI()
    expect(global.fetch).toHaveBeenCalledTimes(1)
})

test("obtiene la pagina anterior", () => {
    global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(pagina1);
      });
      resolve({ json: () => jsonPromise });
  }));

  obtenerPaginaAnteriorDesdeAPI()
  expect(global.fetch).toHaveBeenCalledTimes(1)
})

test("carga la info de los pokemones", () => {

  global.fetch = jest.fn()
    .mockImplementation(() => new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r(bulbasaur);
      });
      resolve({ json: () => jsonPromise });
  }));

  cargarDataPokemones("bulbasaur")
  expect(global.fetch).toHaveBeenCalledTimes(1)

  
})