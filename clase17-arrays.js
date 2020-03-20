var jpereyra = {nombre: 'Juan', apellido: 'Pereyra', altura: 1.90}
var pepe = {nombre: 'Pepe', apellido: 'Perez', altura: 1.75}
var gon = {nombre: 'Gonzalo', apellido: 'Gonzalez', altura: 1.81}

var personas = [jpereyra, pepe, gon]

console.log(`${personas[0].nombre} mide ${personas[0].altura}.`)
console.log(`${personas[0]['nombre']} mide ${personas[0]['altura']}.`)

for(var i = 0; i < personas.length; i++){
    console.log(`${personas[i].nombre} mide ${personas[i].altura}.`)
}
