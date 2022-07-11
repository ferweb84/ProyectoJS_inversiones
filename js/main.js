let contrasena = 'coder1234';
let ingresoPsw = prompt('Bienvenido a "MINOTAUR INVESTEMENTS": \n Ingresa tu Contraseña');
let intentos = 3;

while ((ingresoPsw != contrasena)){
    intentos--;
    alert ('Contraseña Incorrecta... Te quedan '+' ' + intentos + ' '+ 'oportunidades');
    ingresoPsw = prompt('Ingresa Nuevamente');
    if (intentos == 0){
        alert ('te quedaste sin intentos');
        break;
    }
    
}


// let q= prompt('Ingrese cantidad de consultas');

// const cotizacion = 273;
// const texto= "Dolar Blue a :";
// alert (texto + cotizacion);

// for(let i=1; i<=q; i++){
//     let entreda=prompt('Ingresar pesos'); 
//     alert((entreda/cotizacion).toFixed(2)+"Dolares "+"/n");
// }

// const sumar = (num1, num2)=> num1 + num2
// console.log(sumar(5, 6 ))
// const restar = (num1, num2)=> num1 - num2
// console.log(sumar(5, 6 ))
// const multiplicar = (num1, num2)=> num1 * num2
// console.log(sumar(5, 6 ))
// const dividir = (num1, num2)=> num1 / num2
// console.log(sumar(5, 6 ))

// let variable1 = 'hola'
// function mostrarSaludo (){
//     let variable2 = 'chau'
//     let variable1 = variable2 +' '+ 'saludos'
//     console.log(variable1)
// }
// console.log (mostrarSaludo())
// console.log (variable1)


const cryptoBtc={
    ticker: 'Bitcoin',
    cantidadBtccomprado:0.02,
    precioDeCompra: 30000,
    valorAhora:20430.57,
    coins: 0.020000,
    porcentajeGanancOperdida:-31.90,
    valorUsdtAhora:408.61,
}

const cryptoEth={
    ticker: 'Ethereum',
    cantidadBtccomprado:0.24610,
    precioDeCompra: 2220,
    valorAhora:1142.02,
    coins: 0.020000,
    porcentajeGanancOperdida:-48.56,
    valorUsdtAhora:281.05,
}
// console.log(crypto.priceMarket)

// crypto.valorUsdtahora

// console.log(crypto.valorUsdtahora)

// let cantidadDeCompra = parseFloat(prompt('Que cantidad quieres comprar?'))

// function calcularvalorUsdtAhora(cant){
    
//     cripto.valorUsdtAhora=coins * precioMercado

//     console.log (`tenes ${cantidadUsdtcomprado} de Bitcoin`)
// }
// calcularCantCrypto(cantidadUsdtcomprado)

let cantidadBtccomprado = parseFloat(prompt('Que cantidad de Bitcoin quiere comprar o compraste?'))

function calcularValorAhora (coins){

    cryptoBtc.valorAhora=cryptoBtc.valorAhora * coins
    console.log (`Usted tiene ${cryptoBtc.valorAhora} en Usdt `)

}
calcularValorAhora(cantidadBtccomprado)


// let cantidadEthcomprado = parseFloat(prompt('Que cantidad de Ethereum quiere comprar o compraste?'))

// function calcularValorAhora (coins){

//     cryptoEth.valorAhora=cryptoEth.valorAhora * coins
//     console.log (`Usted tiene ${cryptoEth.valorAhora} en Usdt `)

// }
// calcularValorAhora(cantidadEthcomprado)

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