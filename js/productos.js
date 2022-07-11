class Productos {
    constructor (nombre, categoria, precio, stock){
        this.nombre=nombre
        this.categoria=categoria
        this.precio=parseFloat(precio)
        this.stock= parseInt(stock)
    }

    comprar(cant){

        if(this.stock >= cant){
            this.stock=this.stock - cant

            console.log(`quedan ${this.stock} - ${this.nombre}`)

        }else{
            console.log('No tenemos el stock de ese producto')
        }
        
        
        // return this.stock
    }
    cargarstock (cant){
        this.stock=this.stock + cant
    }
    
}

const remera=new Productos('remera', 'merchandising', 1500, 20)
// console.log (remera)
// remera.color= 'negra'
// console.log(remera.color)
const agenda=new Productos('agenda', 'merchandising', 900, 30)
const lapicera=new Productos('lapicera', 'merchandising', 300,50)
const gorra=new Productos('gorra', 'merchandising', 850, 10)

let cantidad = parseInt (prompt('Cuantas remeras queres comprar?'))

console.log(remera)

remera.comprar(cantidad)

console.log(remera)

remera.cargarstock(13)

console.log(remera)

//---------------------------------Cargar Producto

let nombreProducto = prompt('Nombre del Producto')
let categoriaProducto= prompt('Categoria')
let precioProducto= prompt('Precio de Producto')
let stockProducto= prompt('cual es su stock?')

const nuevoProducto = new Productos(nombreProducto, categoriaProducto, precioProducto, stockProducto)
console.log(nombreProducto)