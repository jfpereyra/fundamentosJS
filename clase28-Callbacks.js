const API_URL = 'https://swapi.co/api/'

const PEOPLE_URL = 'people/:id'

const OPTIONS = {crossDomain: true}

const onPersonajeResponse = (personaje) => console.log(`Hola, yo soy ${personaje.name}`)

$.get(`${API_URL}${PEOPLE_URL.replace(':id', 1)}`, OPTIONS, onPersonajeResponse)

