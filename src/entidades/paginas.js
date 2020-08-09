export class Pagina{
    constructor(respuestaPagina){
        this.totalPokemones = respuestaPagina.count
        this.proximaPagina = respuestaPagina.next
        this.paginaSiguiente = respuestaPagina.previous
        this.listaPokemones = respuestaPagina.results
    }
}
