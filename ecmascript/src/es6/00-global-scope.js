// Variables
var a // declarando
var b = 'b' // declaramos y asignamos
b = 'bb'  // reasignacion
var a =  'aa' // redeclaracion

/* Global Scope */
var fruit = 'Apple' // Global

function bestFruit() {
    console.log(fruit)
}

bestFruit()


function countries() {
    country = 'Colombia'
    console.log(country)
}

countries()
console.log(country)

// Example Global Scope

/* var saludoVar = "Hola var" */
let saludoLet = "Hola let"
const saludoConst = "Hola const"

function saludar() {
    saludoVar = "Chao var"
    console.log(saludoVar)
    console.log(saludoLet)
    console.log(saludoConst)
}

saludar()
console.log(saludoVar)