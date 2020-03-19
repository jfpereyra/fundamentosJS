var x = 4, y = '4'

x == y //TRUE, porque iguala el tipo de dato
x === y //FALSE, porque sin diferentes tipos de datos
// Usar el triple igual ===

var jpereyra = {nombre: 'Juan'}

var pepe = {nombre: 'Juan'}

// Comparar Objetos
jpereyra == pepe //|| FALSE, pregunta por la referencia a la variable que estamos utilizando.
// Mismo resultado con ===
// La única forma que sea TRUE es que dos variables estén apuntando al mismo espacio de memoria. O sea:
var pepe2 = jpereyra
