var jpereyra = {
    nombre: 'Juan', apellido: 'Pereyra', edad: 34, peso: 90
}

const INCREMENTO_PESO = 0.2
const DECREMENTO_PESO = 0.2
const DIAS_DEL_ANIO = 365

console.log(`${jpereyra.nombre} pesa ${jpereyra.peso}kg.`)

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= DECREMENTO_PESO

for( var i=1; i<=DIAS_DEL_ANIO; i++){
    var random = Math.random()
    if(random < 0.25){
        aumentarDePeso(jpereyra)
    }else if(random < 0.5) {
        adelgazarDePeso(jpereyra)
    }
}

console.log(`Al final del año ${jpereyra.nombre} pesa ${jpereyra.peso.toFixed(2)} kg.`)