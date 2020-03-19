var jpereyra = {
    nombre: 'Juan', apellido: 'Pereyra', edad: 34}
var dario = {
    nombre: 'Dario', apellido: 'Perez', edad: 30}

function imprimirNombreMayus(persona){
    var {nombre} = persona  //var nombre = persona.nombre 
    console.log(`${nombre.toUpperCase()}`)
}
imprimirNombreMayus(jpereyra)
imprimirNombreMayus(dario)

function cumpleaniosPorValor({edad}){
    edad += 1
    return {edad}
}

function cumpleaniosPorReferencia(persona){
    persona.edad += 1
}

function cumpleanios(persona){
    return {
        ...persona, //copia el objeto persona que fue recibido como parámetros
        edad: persona.edad + 1 //modificamos la edad
    }
}