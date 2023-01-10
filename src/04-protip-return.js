function createPerson (firstName, lastName) {
    return { firstName, lastName}
}

let person = createPerson('Alveiro ', 'Hoyos')

console.log(person)

//arrow functions
const createPerson2 = (firstName, lastName) => ({firstName, lastName})
const person2 = createPerson2( 'Sebastian Mono', 'Hoyos')
console.log(person2)

function printArguments() {
    console.log(arguments)
}

printArguments(10, '20', 'Hola mundo')


const printArguments2 = (age, ...args) => {
    console.log({age, args})
    return args
}

printArguments2(10, 'hola mundo', 5, 30)

const [married, live, firstName, greeting] = printArguments2(10, true, false, 'Alveiro', 'Hola')
console.log({married, live, firstName, greeting} )

const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );
