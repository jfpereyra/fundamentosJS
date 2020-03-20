var jpereyra = {nombre: 'Juan', apellido: 'Pereyra', altura: 1.90, cantidadDeLibros: 120}
var pepe = {nombre: 'Pepe', apellido: 'Perez', altura: 1.75, cantidadDeLibros: 90}
var gon = {nombre: 'Gonzalo', apellido: 'Gonzalez', altura: 1.81, cantidadDeLibros: 160}
var montoto = {nombre: 'Vivi', apellido: 'Montoto', altura: 1.62, cantidadDeLibros: 250}

var personas = [jpereyra, pepe, gon, montoto]

const reducer = (acum, persona) => acum += persona.cantidadDeLibros
const reducerV2 = (acum, {cantidadDeLibros}) => acum += cantidadDeLibros

var totalDeLibros = personas.reduce(reducer ,0)

console.log(totalDeLibros)