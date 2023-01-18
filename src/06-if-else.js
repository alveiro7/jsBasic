let a = 5

if ( a >= 10 ) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor a 10');
}

const hoy = new Date()
let dia = hoy.getDay()

console.log(dia, hoy);

if ( dia === 0 ) {
    console.log('Domingo');
} else if ( dia === 1 ) {
    console.log('Lunes');
} else if (dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes, martes o domingo');
}


dia = 6
const diasLetras = {
    0: 'sunday',
    1: 'monday',
    2: 'thuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday'
}

console.log(diasLetras[dia]);


const diasLetras2 = ['sunday', 'monday', 'thuesday', 'wednesday', 'thursday', 'friday', 'saturday']

console.log(diasletras2[dia]);
