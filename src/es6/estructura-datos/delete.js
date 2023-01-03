class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }

    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index)
        return item

    }
    shiftIndex(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[this.length - 1]
        this.length--
    }
}

const myArray = new MyArray
myArray.push("Alveiro")
myArray.push("Adriana")
myArray.push("camilo")
myArray.push("juanito")
myArray.push("pachito")
myArray.push("camilito")