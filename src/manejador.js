import { borrarPokemonesAnteriores} from "./ui.js"
import { obtenerPaginaSiguiente, obtenerPaginaAnterior} from "./api.js"

export let offset = 0

export function obtenerNuevosPokemones(){
    offset += 20
    borrarPokemonesAnteriores()
    obtenerPaginaSiguiente()
}
export function obtenerPokemonesAnteriores(){
    if(offset === 0){
        () => {}
    }else{
    offset -= 20
    borrarPokemonesAnteriores()
    obtenerPaginaAnterior()
}
}
