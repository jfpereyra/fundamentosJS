const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const OPTIONS = {crossDomain: true}

const onPersonajeResponse = (personaje) => console.log(`Hola, yo soy ${personaje.name}`)

function obtenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
    $.get(url, OPTIONS, onPersonajeResponse)
}

obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)