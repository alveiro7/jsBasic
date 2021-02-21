
//promesa
const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? setTimeout(() => resolve('hello manito'), 3000)
        : reject( new Error('Test Error'))
    })
}

// async await
const helloAsync = async () => {
    const hello = await helloWorld()
    console.log(hello)
}

helloAsync()

const otraFuncion = async () => {
    try {
        const hello = await helloWorld()
        console.log(hello)
    } catch (error) {
        console.log(error)
    }
}

otraFuncion()