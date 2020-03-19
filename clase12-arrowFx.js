var jpereyra = {
    nombre: 'Juan', apellido: 'Pereyra', edad: 30,
    ingeniero: true, cocinero: false, cantante: false, dj: false, guitarrista: false, drone: true
}
var pepe = {
    nombre: 'Pepe', apellido: 'Perez', edad: 15
}
//var mayoriaDeEdad = 18
const MAYORIA_DE_EDAD = 18

function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`)
    } else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}

const esMayorDeEdad_FxAnonima = function(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}

// Arrow Function
// V1
const esMayorDeEdad_ArrowFunctionV1 = (persona) => {
    return persona.edad >= MAYORIA_DE_EDAD
}

// Versión Económica de caracteres
const esMayorDeEdad_ArrowFunctionV2 = persona => persona.edad >= MAYORIA_DE_EDAD

function permitirAcceso(persona){
    if (!esMayorDeEdad_ArrowFunctionV2(persona)){
        console.log('ACCESO DENEGADO')
    }    
}

const esMenorDeEdad = persona => !esMayorDeEdad_ArrowFunctionV2(persona)