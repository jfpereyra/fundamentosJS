const MAYORIA_DE_EDAD = 18

var jpereyra = {
    nombre: 'Juan',
    apellido: 'Pereyra',
    edad: 34
}

function esMayorDeEdad(persona){
    var mensaje
    if(persona.edad >= MAYORIA_DE_EDAD){
        mensaje = 'Es mayor de edad'
    }else{
        mensaje = 'Es menor de edad'
    }
    console.log(mensaje)
}

//esMayorDeEdad(jpereyra)

for (var i = 0; i < 10; i++){
    console.log(i)
}

console.log(i)