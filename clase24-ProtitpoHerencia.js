function heredaDe(prototipoHijo, prototipoPadre){
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    prototipoHijo.prototype.constructor = prototipoHijo
}

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

function Desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
}

heredaDe(Desarrollador, Persona)

Desarrollador.prototype.saludar = function(){
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
}



// var jpereyra = new Persona('Juan', 'Pereyra', 1.90)
// var pepe = new Persona('Pepe','Perez', 1.82)
// var montoto = new Persona('Vivi', 'Montoto', 1.74)