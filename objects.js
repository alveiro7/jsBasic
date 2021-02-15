// objetos



// objetos funcion constructora

function Auto (marca, modelo) {
    this.marca = marca
    this.modelo = modelo
}

let autos = []

//new genera una instancia, una instacia es generar un objeto que proviene de un objeto:
for (let i = 0; i < 2; i++) {
    let marca = prompt(`Ingrese marca del auto`)
    let modelo = prompt(`Ingrese modelo`)
    autos.unshift(new Auto(marca, modelo))
}

for (let i= 0 ; i<autos.length; i++) {
    console.log(autos[i])
}

// Este ejemplo es imaginando que recibimos una lista de 5 carros diferentes y se nos solicita que se almacene esta información, como estamos aprendiendo a usar js por que es un lenguaje cool y no queremos tipiar todo de manera normal y aburrida, usaremos este lenguaje c: así hacemos un pequeño trabajo de separar todas las marcas, modelos y años respectivamente en distintos arrays para así lograr juntarlos en uno solo usando una función constructiva la cual indicara cada auto ingresado con su marca, modelo y año respectivamente.

const marca = ["Audi", "Subaru", "Lexus", "Porsche", "BMW"];
const modelo = [2020,2019,2018,2020,2020,];
let listaAutos = [];

function autoN(marca, modelo){
    this.marca = marca;
    this.modelo = modelo;
}

for (let i=0 ; i<marca.length; i++) {
    var autoNuevo = new autoN(marca[i],modelo[i]);
    listaAutos.push(autoNuevo);
}

// Luego se nos solicito que filtremos los carros por medio del año actual, ya que deseaban saber la cantidad de autos nuevos ingresados. Gracias a nuestro trabajo esto se podía saber de la siguiente manera:

var autosFiltrados = listaAutos.filter((auto) =>{
    return auto.modelo=== 2020;
});
console.log(autosFiltrados);

// Así logramos obtener una lista con todos los autos del año 2020 c:

// Posterior a eso, se necesitaba obtener una lista urgentemente de las marcas de los 30 autos que acababan de ingresar por razones ajenas que no nos interesan c: Obviando que nosotros ya tenemos esta lista creada xD y queremos usar js para esto, esta tarea es tan sencilla como hacer

var marcasRecientes = listaAutos.map(function(auto){
    return auto.marca;
});
console.log(marcasRecientes);

// find
let encuentraCarro = listaAutos.find((auto)=>{
    return auto.marca === "BMW"
})

console.log(encuentraCarro)

// forEach
// no me genera un nuevo array
listaAutos.forEach(auto => {
    console.log(auto.marca)
})

// some

const validar = listaAutos.some(auto => {
    return auto.modelo === 2017
})

console.log(validar)