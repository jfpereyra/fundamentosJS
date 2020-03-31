const jpereyra = {
    nombre: 'Juan',
    apellido: 'Pereyra',
    edad: 34
}

// const cumpleanos = persona => persona.edad++

const cumpleanosInmutable = persona => ({
    ...persona,
    edad: persona.edad + 1
})