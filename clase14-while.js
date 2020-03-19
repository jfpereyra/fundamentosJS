var jpereyra = {
    nombre: 'Juan', apellido: 'Pereyra', edad: 34, peso: 90
}

const INCREMENTO_PESO = 0.3
const DECREMENTO_PESO = 0.3
const DIAS_DEL_ANIO = 365

console.log(`${jpereyra.nombre} pesa ${jpereyra.peso}kg.`)

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO
const adelgazarDePeso = persona => persona.peso -= DECREMENTO_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4


const META = jpereyra.peso - 3
var dias = 0

while(jpereyra.peso > META){
    if(comeMucho()){
        aumentarDePeso(jpereyra)
    }
    if(realizaDeporte()){
        adelgazarDePeso(jpereyra)
    }
    dias += 1
}

console.log(`Pasaron ${dias} días hasta que se logró el objetivo.`)