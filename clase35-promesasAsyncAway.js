const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const OPTIONS = {crossDomain: true}

var temporal

// function obtenerPersonaje(id){
//     return new Promise( (resolve, reject) => {
//         const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
//         $
//         .get(url, OPTIONS, function(data) {
//             resolve(data)
//         })
//         .fail( () => reject(id))
//     })  
// }

function obtenerPersonaje(id){
    return new Promise( (resolve, reject) => {
        const url = `${API_URL}${PEOPLE_URL.replace(':id', id)}`
        $
        .get(url, OPTIONS, function(data) {
            var respuesta = {
                ...data,
                idPersonaje: id
            }
            resolve(respuesta)
        })
        .fail( () => reject(id))
    })  
}

function onError(id){
    console.log(`No se pudo obtener el personaje ${id}.`)
}

function imprimirNombrePersonajes(personajes){
    debugger
    for(var i = 0; i < personajes.length; i++){
        console.log(`El personaje ${personajes[i].idPersonaje} es ${personajes[i].name}`)
    }
}

async function obtenerPersonajes(){
    var ids = [1, 2, 3, 4, 5, 6, 7]
    var promesas = ids.map( id => obtenerPersonaje(id))
    try {
        var personajes = await Promise.all(promesas)
        console.log(personajes)
        imprimirNombrePersonajes(personajes)
    } catch (id) {
        onError(id)
    }
}

obtenerPersonajes()