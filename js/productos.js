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

class Producto {
    constructor(nombre, precio,categoria){
        this.nombre = nombre
        this.precio = parseFloat (precio)
        this.categoria = categoria

    }
}
let listaProductos = [
    {nombre: 'remera', precio: 3000,categoria:' indumentaria'},
    {nombre: 'gorra', precio: 2500,categoria:' indumentaria'},
    {nombre: 'agenda', precio: 1800,categoria:'papeleria'},
    {nombre: 'computadora',precio: 80000,categoria:' informatica'},
    {nombre: 'lapicera', precio: 700,categoria:' papeleria'},

]

//ForEach - es como el for of de antes
let totalCarrito=0

listaProductos.forEach(producto => {
    console.log(`Este articulo es ${producto.nombre}, su precio es ${producto.precio}, pertenece a la categoria: ${producto.categoria}`);
    totalCarrito += producto.precio;
})

//FIND - SOLO TRAE EL PRIMERO QUE ENCUENTRA (UN OBJETO)
//FILTER - ES IGUAL PERO TRAE TODOS (EN UN ARRAY)       PREGUNTAR PORQUE CUANDO CAMBIO DE FIND A FILTER NO FUNCIONA 
//some (true o false)

let search= prompt('Que Producto estas buscando??');
let buscar = listaProductos.find (el => el.nombre == search);
if (listaProductos.some (el => el.nombre == search)){
    alert (`El Producto buscado es ${buscar.nombre} y cuesta ${buscar.precio} pertenece a la categoria ${buscar.categoria}`);
} else {
    alert('ese producto no existe');
}

// let search2= prompt('Que Producto estas buscando??');
// let buscar2 = listaProductos.filter (el => el.nombre == search2);
// if (listaProductos.some (el => el.nombre == search2)){
//     alert (`El Producto buscado es ${buscar2.nombre} y cuesta ${buscar2.precio} pertenece a la categoria ${buscar2.categoria}`);
// } else {
//     alert('ese producto no existe');
// }
let buscaxPrecio = parseInt (prompt ('Hasta que Precio??'));
let buscaPrecio= listaProductos.filter (el => el.precio <= buscaxPrecio);
console.log (buscaPrecio);

//map para actualizar precio de productos 
let listaConIva = listaProductos.map ((producto)=>{
    return{
        nombre:producto.nombre,
        precio:producto.precio *1.21,
        categoria:producto.categoria
    }
})

//acumulador como si fueramos ir sumando al carrito
const sumaCarrito=listaProductos.reduce((acu, prod)=> acu + prod.precio , 0);
console.log(`el total a pagar es ${sumaCarrito}`)

/*
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

//FUNCIONES DE ORDEN SUPERIOR 
/*function porCadaPrecioIva(array, funcion){
    for (const elemento of array){
        funcion(elemento)
    }
}
let precios= [3000,2500,1800, 80000,700];
porCadaPrecioIva(precios, console.log)

let total = 0;

function acumulaCarrito (precios){
    total += precios; 
    console.log(total);
}

porCadaPrecioIva (precios, acumulaCarrito);

const precioConIva= [];

porCadaPrecioIva(precios, (elemento)=>{precioConIva.push(elemento*1.21);})

console.log (precioConIva);*/