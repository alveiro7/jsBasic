/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(num) {
    let a = 0, b = 1, c, result = [a, b]

    for (let i = 2; i < num; i++) {
        c = a + b
        result.push(c)
        a = b
        b = c
    }

    return result
}

console.log(fibonacci(10))