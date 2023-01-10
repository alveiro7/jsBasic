

const fruits = ["apple", "pear", "pinapple", "tomato"]

fruits.length= 6 // ["apple", "pear", "pinapple", "tomato", , ,]
console.log(fruits)
console.log(`I have ${fruits.length} fruits in the fridge`)
console.log(`${fruits}`)
console.log(`${fruits[1]}`)


const array = new Array("hi", true, 3, [2, false], {name: "Cosme"});
console.log(array);
console.log(array.length)
console.log(typeof(array))

const ary = ["hi", true, 3, [2, false], {name: "Cosme"} ]
console.log(ary);
console.log(typeof(ary))

// agregar desde la ultima posicion
// Push
const addfrutas = (fruta) =>{
    addfruta = frutas.push(fruta)
    console.log(`fruta agregada ${fruta}`)
}

addfrutas("caramelo")
console.log(`tengo ${frutas.length} frutas`)
console.log(`${frutas}`)

// eliminando el ultimo elemento
// pop
const deleteFrutas =  () => {
    console.log(`fruta a eliminar ${frutas[frutas.length-1]}`)
    deleteFruta = frutas.pop()
}

deleteFrutas()
console.log(`ahora tengo ${frutas.length} frutas`)
console.log(`${frutas}`)

// agregando al inicio
// unshift
const addfrutas1 = (fruta) =>{
    addfruta = frutas.unshift(fruta)
    console.log(`fruta agregada ${fruta}`)
}

addfrutas1("patacon")
console.log(`tengo ${frutas.length} frutas`)
console.log(`${frutas}`)


// eliminando al incio
// shift
/* const deleteFrutas1 =  () => {
    console.log(`fruta a eliminar ${frutas[0]}`)
    deleteFruta = frutas.shift()
} */

import {deleteFrutas1} from '/delete.js'
const frutas = ["manzana", "pera", "piña", "tomate"]

deleteFrutas1()
console.log(`ahora tengo ${frutas.length} frutas`)
console.log(`${frutas}`)


// buscar position
// indexOf
const position = (fruit) => {
    location = frutas.indexOf(fruit)
    console.log(`La fruta ${fruit} se encuentra en la posicion ${location} del array`)
}

position ("piña")

//includes
const frutas = ["manzana", "pera", "piña", "tomate"]

const position2 = (fruit) => {
    if (frutas.includes(fruit)){
        console.log(`La fruta ${fruit} se encuentra en la frutera`)
    } else {
        console.log(`Esta fruta ${fruit} no esta en la frutera`)
    }
}

position2 ("piña")
position2("patacon")

// toString
const frutas = [12,"piña", 20, 45, "tomate"]

console.log(frutas.toString())

// reverse
console.log(frutas.reverse())

// sort
console.log(frutas.sort())

// slice(inicio, fin)
console.log(frutas.slice(2, 3))

//slice(inicio)
console.log(frutas.slice(2))

