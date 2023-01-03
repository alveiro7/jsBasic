/* lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con
 */
let entradas = [['name', 'alveiro'], ['age', 32]]
console.log(Object.fromEntries(entradas))
let objeto = Object.fromEntries(entradas)
console.log(Object.entries(objeto))
