//declarar variable
var edad

//inicializar // asignar
edad=30


// asignacion de adicion
edad += 5
console.log(`Mi edad + 5 años ${edad}`)

// asignacion de resta
edad -= 5
console.log(`Mi edad - 5 años ${edad}`)

// asignacion de multiplicaciones
edad *= 2
console.log(`Mi edad X 2 ${edad}`)

// asignacion de division
edad /= 2
console.log(`Mi edad / 2 ${edad}`)

// asignacion de residuo
residuo = 3
residuo %= 2
console.log(`residuo de la edad ${residuo}`)

// asignacion de exponenciacion
edad **=2
console.log(`La edad elevanda a la 2 ${edad}`)

// asignacion de desplazamiento a la izquierda
var byte = 255 // 11111111
console.log(`binario ${byte.toString(2)}`)
byte <<= 2
console.log(`el numero en binario se mueve 2 posiciones a la izquierda ${byte} binario -> ${byte.toString(2)}`) 

// asignacion de desplazamiento a la derecha
var byte = - 255
console.log(`Binario negtivo ${byte.toString(2)}`)
byte >>= 2
console.log(`El numero en binario se mueve dos posiciones a la derecha ${byte} binario -> ${byte.toString(2)}` )



// coercion implicita
var a = 4 + "18"
console.log(` a es ${typeof a}`)  //string

var b = 5 * "5"
console.log(`a es ${typeof b}`) // number

// coercion explicita
var c = "4"
console.log(`c es un ${typeof c}`)
var d = Number(c)
console.log(`ahora paso a ser un ${typeof d}`)

var e ="555as"
console.log(`parseando ando ${parseInt(e)}`)

var f = "as555"
console.log(`parsendo error ${parseInt(f)}`) //NaN

var g = "12.4561.1"
console.log(`parseando q se yo ${g}`) // todo igual

// verdad o falsedad
// falsy
console.log(`sin ningun valor es ${Boolean()}`)
console.log(`cuando el valor es cero ${Boolean(0)} `)
console.log(`cuando el valor es null ${Boolean(null)}`)
console.log(`cuando el valor es NaN Not a Number ${Boolean(NaN)}`)
console.log(`cuando el valor es undefined ${Boolean(undefined)}`)
console.log(`cuando el valor es false ${Boolean(false)}`)
console.log(`cuando es una cadena vacia ${Boolean("")}`)
console.log(`negacion del true ${Boolean(!true)}`)

// truthy
console.log(`cualquier numero diferente de cero es ${Boolean(1)}`)
console.log(`cualquier caracter o espacio en blaco en el string ${Boolean("a")}`)
console.log(`cualquier array aunque este vacio es ${Boolean([])}`)
console.log(`cualquier objet aunque este vacio es ${Boolean({})}`)
console.log(`cualquier funcion es verdadera ${Boolean(()=>{})}`)
console.log(`negacion del false ${Boolean(!false)}`)
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
