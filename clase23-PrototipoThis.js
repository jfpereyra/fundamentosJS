function Persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido = apellido
    this.altura = altura
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}
Persona.prototype.soyAlto = function(){
    return this.altura > 1.8
}
// Si la convertimos en Arrow Fx, siempre devuelve False
// Esto es porque en una ArrowFx "this" hace referencia a Window
Persona.prototype.soyAltoV2 = () => this.altura > 1.8 

var jpereyra = new Persona('Juan', 'Pereyra', 1.90)
var pepe = new Persona('Pepe','Perez', 1.82)
var montoto = new Persona('Vivi', 'Montoto', 1.74)