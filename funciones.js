// Declarativas
function area (b, h) {
    resultado = (b * h) / 2
    return console.log( `El area del triangulo es ${resultado}`)
}

area(10, 5)

// Expresion




// arrow function
const area = (b, h) => {
    var total = (b * h) / 2
    console.log(`El area del triangulo es ${total}`)
}  

area(5, 4)

// ES6
// Default Params
function lista (name="alveiro", age=32, country="CO") {
    console.log(`Nombre = ${name}, edad = ${age}, cuidad = ${country}`)
}

lista()
lista('Lupita', 35, "BR")