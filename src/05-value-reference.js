let a = 10

let b = a

a = 30

console.log({a, b});


let juan = { nombre: 'Juan'}
let ana = juan
ana.nombre = 'Ana'

let alveiro = {...juan}
alveiro.nombre = 'Alveiro'
console.log({juan, ana, alveiro});

const changeName = ({...person}) => {
    person.name = 'Alveiro'
    return person
}

let peter = {name: 'peter'}

let tony = changeName(peter)

console.log({tony, peter});


const fruits = ['apple', 'pear', 'pineapple']

console.time('slice');
const otherFruits = fruits.slice()
console.timeEnd('slice');

console.time('spread')
const otherFruits2 = [...fruits]
console.timeEnd('spread')

otherFruits.push('kiwi')
otherFruits2.push('mango')
fruits.unshift('mango')
otherFruits.push('watermelon')

console.table({fruits, otherFruits, otherFruits2});