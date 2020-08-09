export class Pokemon{
    constructor(pokemon){
        this.nombre = pokemon.name
        this.altura = pokemon.height
        this.estadisticas = pokemon.stats
        this.tipos = pokemon.types
        this.fotos = pokemon.sprites.front_default
        this.peso = pokemon.weight
    }
}
