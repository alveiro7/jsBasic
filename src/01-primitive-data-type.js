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

/* Los bigint son un nuevo tipo de dato en JavaScript que se usa
para representar números enteros de un tamaño mayor al que puede
manejar JavaScript de manera nativa. Los bigint se escriben con el sufijo n */
const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n
/* Es importante tener en cuenta que los bigint solo pueden ser usados
para operaciones matemáticas y no pueden ser usados con operadores de comparación,
como == o ===. En su lugar, debes usar los métodos BigInt.asIntN y BigInt.asUintN
para hacer comparaciones entre bigint y números normales.
 */




/* String - Una cadena de caracteres, ejemplo: palabras, nombres de PermissionStatus */
let fullName = 'Peter Parker'
console.log( fullName)
console.log( typeof fullName)

/* Symbol - Es un valor unico que no es igual a ningun otro valor */
let symbol1 = Symbol('a')
let symbol2 = Symbol('a')

/* Los símbolos son un tipo de dato único en JavaScript que se utiliza
para crear identificadores únicos. Cada vez que se crea un símbolo,
se genera un nuevo identificador único, lo que lo hace ideal para usar
como claves de objetos o para identificar elementos de manera única en una aplicación.
 */
const simbolo = Symbol();

let perrito = {
    nombre: "Firulais",
    edad: 3,
    [simbolo]: "Identificador único"
};

console.log(perrito[simbolo]); // "Identificador único"


console.log( typeof symbol1)

console.log( symbol1, symbol2)

console.log( symbol1 === symbol2)

/* Aqui arroja un error porque la palabra enum es una palabra reservada */
const enum = 10