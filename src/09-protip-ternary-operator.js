const elMayor = (a, b) => (a > b) ? a : b
console.log( elMayor( 10, 30))

//

const hasMerbership  = (isMember) => isMember ? `2 Dollars` : `15 Dollars`
console.log( hasMerbership(true))
console.log( hasMerbership(false))

const friend = false
const friends = [
    'Peter',
    'Tony',
    'Aquaman',
    'El negro',
    'El mono',
    friend ? 'Thor' : 'Loki',
    elMayor(90, 10)
]

console.log(friends)


const note = 90 // A+ A B+ B
const grade = note >= 95 ? 'A+' :
              note >= 90 ? 'A'  :
              note >= 85 ? 'B+' :
              note >= 80 ? 'B'  :
              note >= 75 ? 'C+' :
              note >= 70 ? 'C'  : 'F'
console.log({note, grade})