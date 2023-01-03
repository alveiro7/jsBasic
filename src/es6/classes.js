// clases
// Es recomendable escribir la primera letra de las clases con mayuscula
class Usuario {
    //metodo constructor
    constructor(name, age, phone) {
        this.name =  name, // propiedades
        this.age = age
        this.phone = phone
    }
    //funcion dentro de una clase se llaman metodos
    mostrarSaludo(mensaje) {
        return mensaje
    }

    mostrarInfo() {
        return `
        nombre: ${this.name}
        edad: ${this.age}
        telefono: ${this.phone}
        `}
}

const alveiro = new Usuario('Alveiro Hoyos', 35, 321568941)
console.log(`mi nombre es ${alveiro.name} con ${alveiro.age} years old`)
console.log(alveiro.mostrarInfo())
const sevas = new Usuario('Sevastian Hoyos', 12)
console.log(`mi nombre es ${sevas.name} con ${sevas.age} years old`)

// Herencia

class Student extends Usuario {
    constructor (name, age, phone, career) {
        super(name, age, phone)
        this.career = career
    }

    mostrarInfo() {
        return `
        nombre: ${this.name}
        edad: ${this.age}
        telefono: ${this.phone}
        carrera: ${this.career}`
    }
}



const pollo = new Student ('Pollito Florez', 45, 45612546, 'front-end developer')
console.log(pollo.name)
console.log(pollo.mostrarInfo())
