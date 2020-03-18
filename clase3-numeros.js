var edad = 27

//edad = edad + 1
edad += 1
peso = 75
peso -= 2
sandwich = 1
//peso = peso + sandwich
peso += sandwich

precioVino = 200.331

//var total = precioVino * 3
var total1 = precioVino * 100 * 3 / 100 //Para eliminar problema de decimales
var total2 = Math.round(precioVino * 3 * 100) / 100 

var totalStr = total2.toFixed(2)

var totalNumber = parseFloat(totalStr)

var pizza = 8
var persona = 2
var cantidadPorcionesPorPersona = pizza / persona
