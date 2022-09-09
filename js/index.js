//1era Entrega de Proyecto Final

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
    Productos.push(new Producto(id,nombre, medida, color,precio))
    console.table(Productos)
}

function dataBase() {
	Productos.push(new Producto(955875, "Globo numérico", 5, "rojo", 5000))
	Productos.push(new Producto(955876, "Globo de agua", 4, "verde", 3000))
	Productos.push(new Producto(955877, "Globo payaso", 3, "amarillo", 3500))
    Productos.push(new Producto(955878, "Globo payaso", 3, "azul", 3500))
    Productos.push(new Producto(955879, "Globo payaso", 4, "azul", 4000))
    Productos.push(new Producto(955880, "Globo payaso", 4, "rojo", 4000))
    Productos.push(new Producto(955880, "GLOBO", 4, "rojo", 4000))
    console.table(Productos)
}

//Filtrado de los elementos de la dataBase

function filtrarPorNombre() {
    let parametro = prompt("Ingresa el nombre a filtrar:")
    let resultado = Productos.filter((Producto)=> Producto.nombre.includes(parametro))
        console.table(resultado)
}
function filtrarPorColor() {
    let parametro = prompt("Ingresa el color a filtrar:")
    let resultado = Productos.filter((Producto)=> Producto.color.includes(parametro))
        console.table(resultado)
}

//Busqueda de ID
function buscarId() {
    let numId = prompt("Ingresa el ID a buscar:")
    let resultado = Productos.find((Producto)=> Producto.id == (numId))
        if (resultado !== undefined) {
            console.table(resultado)
        } else {
            console.warn("No se encontró el ID.")
        }
}