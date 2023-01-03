// if
if (false) {
    console.log(`Habla, todo bien`)
} else {
    console.log(`Error`)
}


// else if
edad = "10" ;
if (edad === 18) {
    console.log(`puedes votar por la colombia humana porque tienes ${edad} años`)
} else if (edad === "18") {
    console.log(`Epa el numero de acabas de colocar es un ${typeof(edad)}`)
} else if (edad > 18) {
    console.log(`puede votar por el que diga el patron uribe porque ud tiene ${edad} años`)
} else {
    console.log(`aun no puede votar, vaya a ver cuentos de los hermanos green porque tiene ${edad} añitos ${typeof(edad)}`)
}


// operador condicional ternario

edad === 18 ? console.log(`puedes votar por la colombia humana porque tiene ${edad} años`) : console.log(`no puedes votar por nadien`)


// pieda papel o tijera

let op1 = "piedra"

let op2 = "papel"

let op3 = "tijera"

const result = (user, cpu) => {
    if(user != cpu) {
        if(user === op1 && cpu === op3){
            console.log(`el usuario GANO con ${op1}`)
        } else if(user === op2 && cpu === op1) {
            console.log(`el usario GANO con ${op2}`)
        } else if(user === op3 && cpu === op2) {
            console.log(`el usaurio GANO con ${op3}`)
        } else {
            console.log(`La CPU Gano!!!`)
        }
    } else if (user === cpu) {
        console.log(`DEUCES`)
    }
}

result(op3, op3)


// switch
// piedra papel tijera

const question = prompt("Ingresar tu opcion: piedra, papel o tijera")
const user = question.toLowerCase()
const options = ["piedra", "papel", "tijera"]
const machine = options[Math.floor(Math.random() * 3)]

switch(true) {
    case (user === machine):
        console.log(`${user} DEUCES!! ${machine}`)
        break
    case (machine === 'piedra' && user === 'papel'):
        console.log(`${user}  WIN!! ${machine}`)
        break
    case (machine === 'papel' && user === 'tijera'):
        console.log(`${user} WIN!!  ${machine}`)
        break
    case (machine === 'tijera'  &&  user === 'piedra'):
        console.log(`${user} WIN!!! ${machine}`)
        break
    default:
        console.log(`${user} GAME OVER!! ${machine}`)
}
