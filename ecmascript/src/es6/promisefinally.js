const helloWorld = () => {
    return new Promise ((resolve, reject) => {
        (true)
        ? setTimeout(() => {
            resolve('Hello manito')
        }, 3000)
        : reject (new Error('Test error'))
    })
}

helloWorld()
    .then(result => console.log(`result -> ${result}`))
    .catch(err => console.log(`err -> ${err}`))
    .finally(setTimeout( () => console.log(`Finalizo 5seg`), 5000))