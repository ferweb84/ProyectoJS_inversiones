// let contrasena = '12';
// let ingresoPsw = prompt('Bienvenido a "MINOTAUR INVESTEMENTS": \n Ingresa tu Contraseña');
// let intentos = 3;

// while ((ingresoPsw != contrasena)){
//     intentos--;
//     alert ('Contraseña Incorrecta... Te quedan '+' ' + intentos + ' '+ 'oportunidades');
//     ingresoPsw = prompt('Ingresa Nuevamente');
//     if (intentos == 0){
//         alert ('te quedaste sin intentos');
//         break;
//     }
    
// }

// const cryptoBtc={
//     ticker: 'Bitcoin',
//     cantidadBtccomprado:0.02,
//     precioDeCompra: 30000,
//     valorAhora:20430.57,
//     coins: 0.020000,
//     porcentajeGanancOperdida:-31.90,
//     valorUsdtAhora:408.61,
// }

// const cryptoEth={
//     ticker: 'Ethereum',
//     cantidadBtccomprado:0.24610,
//     precioDeCompra: 2220,
//     valorAhora:1142.02,
//     coins: 0.020000,
//     porcentajeGanancOperdida:-48.56,
//     valorUsdtAhora:281.05,
// }


// let cantidadBtccomprado = parseFloat(prompt('Que cantidad de Bitcoin quiere comprar o compraste?'))

// function calcularValorAhora (coins){

//     cryptoBtc.valorAhora=cryptoBtc.valorAhora * coins
//     console.log (`Usted tiene ${cryptoBtc.valorAhora} en Usdt `)

// }
// calcularValorAhora(cantidadBtccomprado)



// class Productos {
//     constructor (nombre, categoria, precio, stock){
//         this.nombre=nombre
//         this.categoria=categoria
//         this.precio=parseFloat(precio)
//         this.stock= parseInt(stock)
//     }

//     comprar(cant){

//         if(this.stock >= cant){
//             this.stock=this.stock - cant

//             console.log(`quedan ${this.stock} - ${this.nombre}`)

//         }else{
//             console.log('No tenemos el stock de ese producto')
//         }
        
        
//         // return this.stock
//     }
//     cargarstock (cant){
//         this.stock=this.stock + cant
//     }
    
// }

// const remera=new Productos('remera', 'merchandising', 1500, 20)
// // console.log (remera)
// // remera.color= 'negra'
// // console.log(remera.color)
// const agenda=new Productos('agenda', 'merchandising', 900, 30)
// const lapicera=new Productos('lapicera', 'merchandising', 300,50)
// const gorra=new Productos('gorra', 'merchandising', 850, 10)

// let cantidad = parseInt (prompt('Cuantas remeras queres comprar?'))

// console.log(remera)

// remera.comprar(cantidad)

// console.log(remera)

// remera.cargarstock(13)

// console.log(remera)

// //---------------------------------Cargar Producto

// let nombreProducto = prompt('Nombre del Producto')
// let categoriaProducto= prompt('Categoria')
// let precioProducto= prompt('Precio de Producto')
// let stockProducto= prompt('cual es su stock?')

// const nuevoProducto = new Productos(nombreProducto, categoriaProducto, precioProducto, stockProducto)
// console.log(nombreProducto)