export class Pokemon{
    constructor(pokemon){
      this.nombre = pokemon.name
      this.altura = pokemon.weight
      this.peso = pokemon.height
      this.fotos = pokemon.sprites.front_default
      this.estadisticas = pokemon.stats
      this.tipos = pokemon.types
    }
}

