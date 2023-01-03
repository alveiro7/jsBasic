function nuevaFuncion(name, age, country) {
    var  name = 'Alveiro'
    var age = 32
    var country=  'CO'
    console.log(name, age, country)
}

function Fruit (type) {
    this.type = type;
    this.color = 'unknown';
    this.getInformation = getFruitInformation;
}

function getFruitInformation() {
    return 'This ' + this.type + ' is ' + this.color + '.';
}

let lime = new Fruit('Mexican lime');
console.log(lime.getInformation());

lime.color = 'green';
console.log(lime.getInformation());

// multilinea
console.log(`esto es una
multi
linea`)

// spread operator
// operador de propagacion
let ozuna =[ 'en la initimidad', 'dile q tu me quieres']
let badbunny = ['diles', 'si veo a tu mama']
let nelsov = ['regalame una noche', 'cuando te vayas']
let spotify = ['sin miedo', ...ozuna, ...nelsov, ...badbunny]

console.log(spotify)


// Desestrucutraciòn
let person = {
    'name' : 'alveiro',
    'age' : 45,
    'country' : 'BR'
}

console.log(person.country, person.name, person.age)

let {name, age, country} = person

console.log( name, country, age)

let person1 = {
    'name' : 'alveiro',
    'age' : 45,
    'country' : 'BR'
}

console.log(person1.country, person1.name, person1.age)

let {country, ...all} = person1

console.log( country, all)
console.log(all)

// objetos
let name1 = 'alveiro'
let age = 32

    // es5
    obj = {name: name1, age: age}
    console.log(` ES5 ${name1} ${age}`)

    // es6
    obj2 = { name1, age }
    console.log(`ES6 ${name1} ${age}`)

// arrow function
const names = [
    { name: 'alveiro', age: 25 },
    { name: 'sandra', age: 15 },
    { name: 'paola', age: 45 }
]

const saludar = ({name, age}) => {
    const saludo =`Hola!!! mi nombre es ${name} y tengo ${age} años, saludos desde colombia`
    console.log(saludo)
}

const names2 = names.entries
saludar(names2)

let listOfNames = names.map((item) => {
    console.log(` nombre : ${item.name}`)
})

const listOfNames2 = names.map((item) => console.log(`una linea edad: ${item.age}`))

// promesas

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (false) {
            resolve(`Estamos bien`)
        } else {
            reject(`Epa tenemos un issue`)
        }
    })
}

helloPromise ()
    .then(response => console.log(response))
    .catch(error => console.log(error))




