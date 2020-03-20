class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
    }
}

// var jpereyra = new Persona('Juan', 'Pereyra', 1.90)
// var pepe = new Persona('Pepe','Perez', 1.82)
// var montoto = new Persona('Vivi', 'Montoto', 1.74)