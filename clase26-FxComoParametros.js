class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar(fn){
        // var {nombre, apellido} = this //Se crean 2 variables que se completan con valores de "this"
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}.`)
        if (fn){ //Si fn está definida. Null es siempre false. Un objeto/Array siempre es true
            fn(this.nombre, this.apellido, false)
        }
    }
    soyAlto(){
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        super(nombre, apellido, altura)
    }
    saludar(fn){
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador.`)
        if (fn){ //Si fn está definida. Null es siempre false. Un objeto/Array siempre es true
            fn(this.nombre, this.apellido, true)
        }
    }
}

function ResponderSaludo(nombre, apellido, esDev){
    console.log(`Buen día ${nombre} ${apellido}`)
    if (esDev){
        console.log(`Ah mirá, no sabía que eras desarrollador.`)
    }
}

var jpereyra = new Persona('Juan', 'Pereyra', 1.90)
var pepe = new Persona('Pepe','Perez', 1.82)
var montoto = new Desarrollador('Vivi', 'Montoto', 1.74)

jpereyra.saludar()
pepe.saludar(ResponderSaludo)
montoto.saludar(ResponderSaludo)