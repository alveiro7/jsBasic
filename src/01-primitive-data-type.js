/* Datos Primitivos

Es una informacion que no es un objeto y son inmutables */

/* Boolean - true / false :: Verdadero y Falso */
let isMarvel = true
console.log( typeof isMarvel)


/* Null - Sin valor en lo absoluto */
let iAmNull = null
console.log( typeof iAmNull)


/* Undefined - una variable declarada que no se le asigna valor */
let superPower
console.log( typeof superPower)

/* Number - integer, floats, EventCounts */
let number = 105n //bigint
let total= number * 2n
console.log( total )
console.log(typeof number)



/* String - Una cadena de caracteres, ejemplo: palabras, nombres de PermissionStatus */
let fullName = 'Peter Parker'
console.log( fullName)
console.log( typeof fullName)

/* Symbol - Es un valor unico que no es igual a ningun otro valor */
let symbol1 = Symbol('a')
let symbol2 = Symbol('a')

console.log( typeof symbol1)

console.log( symbol1, symbol2)

console.log( symbol1 === symbol2)