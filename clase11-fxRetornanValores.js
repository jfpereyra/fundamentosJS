var jpereyra = {
    nombre: 'Juan', apellido: 'Pereyra', edad: 30,
    ingeniero: true, cocinero: false, cantante: false, dj: false, guitarrista: false, drone: true
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

function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}