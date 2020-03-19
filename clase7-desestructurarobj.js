var jpereyra = {
    nombre: 'Juan',
    apellido: 'Pereyra',
    edad: 34
}
var dario = {
    nombre: 'Dario',
    apellido: 'Perez',
    edad: 30 
}

function imprimirNombreMayus(persona){
    var {nombre} = persona  //var nombre = persona.nombre 
    console.log(`${nombre.toUpperCase()}`)
}
imprimirNombreMayus(jpereyra)
imprimirNombreMayus(dario)
