import { obtenerPaginaSiguienteDesdeAPI, obtenerPaginaAnteriorDesdeAPI} from "./api.js"
import { offset } from "./manejador.js"
import { buscarPaginaEnLS} from "./storage.js"
import { crearListaPokemones} from "./ui.js"

export function cargarPaginaSiguiente(){
    try{
        let paginaLS = buscarPaginaEnLS(offset)
        crearListaPokemones(paginaLS.results)
        console.log("cargo pagina siguiente desde LS")
    }catch(e){
        obtenerPaginaSiguienteDesdeAPI()
    }
}

export function cargarPaginaAnterior(){
    try{
        let paginaLS = buscarPaginaEnLS(offset)
        crearListaPokemones(paginaLS.results)
        console.log("cargo pagina anterior desde ls")
    } catch(e){
        obtenerPaginaAnteriorDesdeAPI()
    }
}