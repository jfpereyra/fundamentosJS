function diasEntreFechas(fecha1, fecha2){
    const diferencia = Math.abs(fecha1 - fecha2) //Número en milisegundos
    const milisegundosEnUnDia = 1000 * 60 * 60 * 24
    //return diferencia / milisegundosEnUnDia
    return Math.floor(diferencia / milisegundosEnUnDia)
}

const hoy = new Date() //Fecha actual por defecto
const fechaNacimiento = new Date(1985,3,21) //Los meses empiezan en 0

