//declarar variable
var edad

//inicializar
edad=30


//hoisting
console.log(nombre)
var nombre = 'alveiro'
console.log(nombre)

hey()

function hey() {
    console.log(`hola ${name}`)
}

var name = 'Alveiro'

// scope global

var name = 'Alveiro'

function nombre () {
    // scope local
    var apellido = 'Hoyos'
    
    console.log(`${name} ${apellido}`)
}

nombre()
console.log(`${apellido}`)