class MyArray {
    constructor() {
        this.length = 0
        this.data = {}
    }
    //metodo get
    get(index) {
        return this.data[index]
    }

    // metodo push con estructura de datos
    push(item) {
        this.data[this.length] = item
        this.length++
        return this.data
    }

    // metodo pop
    pop() {
        const lastItem = this.data[this.length - 1]
        delete this.data[this.length - 1]
        this.length--
        return lastItem
    }

    //eliminar
    delete(index) {

    }

    shiftIndex() {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        delete this.data[index + 1]
    }

}

const myArray = new MyArray
myArray.push("Alveiro")
myArray.push("Adriana")
myArray.push("camilo")
console.log(myArray);
console.log(myArray.get(1));
console.log(myArray.pop());
myArray.pop()
console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray.get(i))
}