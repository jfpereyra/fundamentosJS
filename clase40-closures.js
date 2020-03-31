const saludoArgentino = crearSaludo('che')
const saludoMexicano = crearSaludo('guey')
const saludoColombiano = crearSaludo('amigo')


function crearSaludo(finalDeFrase){
    debugger
    return function(nombre){
        console.log(`Hola ${nombre} ${finalDeFrase}`)
    }
}

saludoArgentino('Juan')
saludoMexicano('Juan')
saludoColombiano('Juan')