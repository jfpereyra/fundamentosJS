var jpereyra = {nombre: 'Juan', apellido: 'Pereyra', altura: 1.90}
var pepe = {nombre: 'Pepe', apellido: 'Perez', altura: 1.75}
var gon = {nombre: 'Gonzalo', apellido: 'Gonzalez', altura: 1.81}
var montoto = {nombre: 'Vivi', apellido: 'Montoto', altura: 1.62}

var personas = [jpereyra, pepe, gon, montoto]

const pasarAlturaACms = persona => {
    persona.altura *= 100
    return persona
}

const pasarAlturaACmsSinImpactarPersonas = persona => {
    return {
        ...persona,
        altura: persona.altura * 100
    }
}

// Arrow function seguido de paréntesis significa a va a retornar un objeto
const pasarAlturaACmsSinImpactarPersonasV2 = persona => ({
    ...persona,
    altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACmsSinImpactarPersonas)

console.log(personasCms)