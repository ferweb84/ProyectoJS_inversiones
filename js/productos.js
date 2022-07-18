let contrasena = '12';
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

class Producto {
    constructor(nombre, precio,categoria){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat (precio)
        this.categoria = categoria

    }
}
let listaProductos = [
    {nombre: 'remera', precio: 2500,categoria:'indumentaria'},
    {nombre: 'agenda', precio: 2300,categoria:'papeleria'},
    {nombre: 'computadora',precio: 20000,categoria:'informatica'},

]
const agregarProducto= ()=> {
    let nombre= prompt('Se ingresa producto')
    let precio= parseFloat(prompt('Ingresa el precio'))
    let categoria= prompt('ingresa la Categoria');

    let productoNuevo = new Producto(nombre,precio,categoria);
    listaProductos.push(productoNuevo);
    console.log(listaProductos)
}

agregarProducto()

for (let producto of listaProductos){
    console.log(`Este articulo es ${producto.nombre}, su precio es ${producto.precio}, pertenece a la categoria: ${producto.categoria}`)
}

