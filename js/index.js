//Desafío Entregable 3

//Constante
const NUEVOID = ()=> parseInt(Math.random() * 1000000)

//Array Productos
const Productos = [] 


// Clase constructora de producto
class Producto {
    constructor(id, nombre, medida, color, precio) {
        this.id = id
        this.nombre = nombre
        this.medida = medida
        this.color = color
        this.precio = precio
    }
}

function agregarProducto() {
    let id = NUEVOID()
    let nombre = prompt("Ingresa la descripción del producto:")
    let medida = prompt("Ingresa la medida del producto:")
    let color = prompt("Ingresa el color del producto:")    
    let precio = prompt("Ingresa el precio del producto:")
    debugger
    const Produts = {id: id, nombre: nombre, medida: medida, color: color, precio: precio}
        Productos.push(Produts)
        console.table(Productos)
}

function dataBase() {
	Productos.push(new Producto(5875, "Globo numérico", 5, "rojo", 5000))
	Productos.push(new Producto(5876, "Globo de agua", 4, "verde", 3000))
	Productos.push(new Producto(5877, "Globo payaso", 3, "amarillo", 3500))
}