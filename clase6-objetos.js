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

// ******** FORMA 1 ***********
// function imprimirNombreMayus(nombre){
//     nombre = nombre.toUpperCase()
//     console.log(`${nombre}`)
// }
// imprimirNombreMayus(jpereyra.nombre)
// imprimirNombreMayus(dario.nombre)

// ******** FORMA 2 ***********
// function imprimirNombreMayus(persona){
//     console.log(`${persona.nombre.toUpperCase()}`)
// }
// imprimirNombreMayus(jpereyra)
// imprimirNombreMayus(dario)

// ******** FORMA 3 ***********
function imprimirNombreMayus({nombre}){
    console.log(`${nombre.toUpperCase()}`)
}
imprimirNombreMayus(jpereyra)
imprimirNombreMayus(dario)
imprimirNombreMayus({nombre: 'pepe'})
