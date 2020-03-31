const jpereyra = {
    nombre: 'Juan',
    apellido: 'Pereyra'
}

function saludar(){
    console.log(`Hola mi nombre es ${this.nombre}`)
}

const saludarAJuan = saludar.bind(jpereyra)

// saludar()
// saludarAJuan()

// setTimeout(saludar.bind(jpereyra), 1000);


function saludarV2(saludo = 'Hola'){
    console.log(`${saludo} mi nombre es ${this.nombre}`)
}

setTimeout(saludarV2.bind(jpereyra, 'Hola che'), 1000);

// La siguiente forma es incorrecta:
//setTimeout(saludarV2('Hola che').bind(jpereyra), 1000);
// Ya que ejecutala función en el momento y luego falla.


//Tanto call como apply ejecutan la función en ese momento.

//saludarV2.call(jpereyra, 'Hola che call')

//saludarV2.apply(jpereyra, ['Hola che apply'])

setTimeout(saludarV2.call(jpereyra, 'Hola che call'), 1000);