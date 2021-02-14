let string =''

for(let i= 0; i<9; i++) {
    string += i
}

console.log(string)

//for of

const estudiantes = ["Maria", "Alveiro", "Sergio", "Rosa", "Daniel"]

const saludar = (i) => {
    console.log(`Hola, ${i}`)
}

for (let i of estudiantes) {
    saludar(i)
}


// while
const estudiantes = ["Maria", "Alveiro", "Sergio", "Rosa", "Daniel"]

const saludar = (i) => {
    console.log(`Hola, ${i}`)
}

while(estudiantes.length > 0) {
    console.log(estudiantes)
    let estudiante = estudiantes.pop()
    saludar(estudiante)
}
