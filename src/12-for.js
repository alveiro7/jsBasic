const heroes = ['Batman', 'Superman', 'Wonder Woman', 'Aquaman']

console.warn('For tradicional')

let string =''

for(let i= 0; i<9; i++) {
    string += i
}

console.log(string)

for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i])
}

//for of

console.warn('For of')

const estudiantes = ["Maria", "Alveiro", "Sergio", "Rosa", "Daniel"]

const saludar = (student) => {
    console.log(`Hola, ${student}`)
}

for (let student of estudiantes) {
    saludar(student)
}

for (let heroe of heroes) {
    console.log(heroe)
}

// for in
console.warn('For in')
for (let i in heroes) {
    console.log(heroes[i])
}

// for each
console.warn('For each')
estudiantes.forEach(student => console.log(student))