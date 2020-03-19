var jpereyra = {
    nombre: 'Juan', apellido: 'Pereyra', edad: 30,
    ingeniero: true, cocinero: false, cantante: false, dj: false, guitarrista: false, drone: true
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} es:`)
    if(persona.ingeniero){
        console.log('Ingeniero')
    } else{
        console.log('No es ingeniero')
    }
    if(persona.cocinero){
        console.log('Ingeniero')
    } else{
        console.log('No es cocinero')
    }
}