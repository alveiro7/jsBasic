const cars = ['Ford', 'Mazda', 'Honda', 'Volskwagen', 'Chevrolet', 'Nissan', 'Renault']

let i = 0
console.warn('While')
/* while(i < cars.length) {
    console.log(cars[i])
    i++
} */

while(cars[i]) {
    if (i===1) {
        i++
        continue
    }
    console.log(cars[i])
    i++
}

console.warn('Do While')
let j = 10

do {
    console.log(cars[j])
    j++
} while( cars[j])