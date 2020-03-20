function Persona(nombre, apellido){ //Es lo que vamos a ejecutar al momento de crear una nueva persona.
//Es lo que en otros lenguajes se conoce como constructor.
    this.nombre = nombre
    this.apellido = apellido
    this.edad = 20
}

Persona.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
}

var jpereyra = new Persona('Juan', 'Pereyra')
var pepe = new Persona('Pepe','Perez')
var montoto = new Persona('Vivi', 'Montoto')