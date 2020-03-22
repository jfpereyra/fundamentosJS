const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTIONS = {crossDomain: true}


function obtenerPersonaje(id){
    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, OPTIONS, function(data) {
            debugger
            resolve(data)
        })
        .fail( () => reject(id))
    })  
}

function onError(id){
    console.log(`No se pudo obtener el personaje ${id}.`)
}
function imprimirNombrePersonaje(personaje){
    console.log(`El personaje 1 es ${personaje.name}`)
}

obtenerPersonaje(1)
    .then( function (personaje){
        console.log(`El personaje 1 es ${personaje.name}`)
    })
    .catch(onError) // Llamamos a la Fx onError por referencia. 
    // No estamos ejecutando la Fx, sino que pasamos como parámetro el nombre de la función que se va a ejecutar.
    // Además, no es necesario pasar el parámetro ID.