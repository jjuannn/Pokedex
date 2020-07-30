import { 
    cargarPaginaSiguiente,
    cargarPaginaAnterior 
} from "../servicios.js"
let offset = 0
const pagina2 = require ("../../../cypress/fixtures/pagina2.json")

test("carga la pagina siguiente", () => {
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
