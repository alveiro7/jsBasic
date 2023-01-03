/* un nuevo método que nos permite aplanar arreglos.
 */
let rocola = ['en la initimidad', 'dile q tu me quieres','regalame una noche', 'cuando te vayas', ['regalame una noche', 'cuando te vayas','diles', 'si veo a tu mama' ]]
console.log(rocola)
console.log(rocola.flat(2))


//flatMap
// lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
let numeros = [1,2,3,4,5]
console.log(numeros.flatMap(valor => [valor, valor * 3]))