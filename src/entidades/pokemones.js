export class Pokemon{
    constructor(nombre, altura, tipos = [], foto, peso, hp, ataque, defensa, ataqueEspecial, defensaEspecial, velocidad){
        this.nombre = nombre
        this.altura = altura
        this.tipos = tipos
        this.foto = foto
        this.peso = peso
        this.hp = hp
        this.ataque = ataque
        this.defensa = defensa
        this.ataqueEspecial = ataqueEspecial
        this.defensaEspecial = defensaEspecial
        this.velocidad = velocidad
    }
    
}