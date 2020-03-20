var jpereyra = {nombre: 'Juan', apellido: 'Pereyra', altura: 1.90}
var pepe = {nombre: 'Pepe', apellido: 'Perez', altura: 1.75}
var gon = {nombre: 'Gonzalo', apellido: 'Gonzalez', altura: 1.81}
var montoto = {nombre: 'Vivi', apellido: 'Montoto', altura: 1.62}

var personas = [jpereyra, pepe, gon, montoto]

const esAlta = persona => persona.altura > 1.8
const esAltaV2 = ({altura}) => altura > 1.8

var personasAltas = personas.filter(esAlta)
// Otra opción es usar una función anónima. Pero es más confuso.
var personasAltasV2 = personas.filter(function (persona){
    return persona.altura > 1.8
})

console.log(personasAltas)
console.log(personasAltasV2)