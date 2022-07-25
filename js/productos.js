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
//-----------------------------------------------------------------------------------------


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
let buscaPrecio= listaProductos.filter(el => el.precio <= buscaxPrecio);
console.log (buscaPrecio);

//map para actualizar precio de productos 
let listaConIva = listaProductos.map ((producto)=>{
    return{
        nombre:producto.nombre,
        precio:producto.precio *1.21,
        categoria:producto.categoria,
    }
})

//acumulador como si fueramos ir sumando al carrito / Descuento 20% preguntar porque no funciona
const sumaCarrito=listaProductos.reduce((acu, prod)=> acu + prod.precio , 0);
console.log(`el total a pagar es ${sumaCarrito}`)



//sort acomodar la lista en este caso por nombre, pero podria ser por precio
listaProductos.sort((a,b)=>{
    if(a.nombre > b.nombre){
        return 1
    }
    if(a.nombre < b.nombre){
        return -1
    }
})
console.log(listaProductos)


//------------------------------------------------------------------------------------

//Maneras de acceder al DOM

// Por ID - nos trae solo uno, solo el objeto
let titulo= document.getElementById('titulo');
console.log(titulo);


//Por Clase - nos trae un Array

let parrafo = document.getElementsByClassName('parrafo');
console.log(parrafo);

//por Etiqueta
let subtitulo= document.getElementsByTagName('h2');
console.log(subtitulo)

//por Selector -solo nos da el primero que encuentra 
let selectorParrafo= document.querySelector('.parrafo');
console.log(selectorParrafo);
// document.querySelector("#titulo");
// document.querySelector("h2");
// document.querySelector("div form parrafo");


//por Selectorall 
let selectorParrrafos = document.querySelectorAll (".parrafos");
console.log(selectorParrrafos);


// console.log (titulo.innerText);

// titulo.innerText = "cambie el titutlo";
console.log (titulo.innerHTML);
titulo.innerHTML= "Presentación de los productos <a href=''> Nuevos </a>";
titulo.style.color ="#6495ED";
// titulo.style.display ='none'

titulo.className= 'container row';//solamente para el class
titulo.setAttribute ('class','titulo1');//resetear algun Atributo 
console.log(titulo.getAttribute('id'));//agregar algun Atributo 

let lista = document.querySelectorAll('li');
console.log(lista);

lista.forEach((el)=>{
    console.log(el.innerText);
})

//------------------------------------------------------------------------------------

let elementoNuevo = document.createElement('h2');//con el metodo creo elemento nuevo
elementoNuevo.setAttribute('id','subtitulo2');//le agrego atributos
elementoNuevo.innerHTML ='Este es un subtitulo nuevo';//le agrego innerhtml
let contenedor =document.getElementById('contenedor');
contenedor.appendChild(elementoNuevo);//con el metodo se lo agrego al contenedor
console.log(elementoNuevo);

// contenedor.removeChild(elementoNuevo);//le quito el elemento nuevo 

//me trae un solo objeto 
// let merchandising = ['remera','agenda','billetera','computadora','lapicera'];
// let ulPadre= document.querySelector('ul');
// merchandising.forEach((el) => {
//     let eleLista=document.createElement('li');
//     eleLista.innerHTML = el;
//     ulPadre.appendChild(eleLista);
// })

//me trae un array 
let merchandising = ['remera','agenda','billetera','computadora','lapicera'];
let ulPadre= document.getElementsByTagName('ul'); //o puedo usar queryselectorall
merchandising.forEach((el) => {
    let eleLista=document.createElement('li');
    eleLista.innerHTML = el;
    ulPadre[0].appendChild(eleLista);
})

let nombre = document.getElementById("nombre").value;
console.log(nombre);


let listaProductosAgregados = [
    {nombre: 'remera', precio: 3000,categoria:' indumentaria'},
    {nombre: 'gorra', precio: 2500,categoria:' indumentaria'},
    {nombre: 'agenda', precio: 1800,categoria:'papeleria'},
    {nombre: 'computadora',precio: 80000,categoria:' informatica'},
    {nombre: 'lapicera', precio: 700,categoria:' papeleria'},
];
const guardarDatos= ()=> {
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let categoria = document.getElementById('categoria').value;

    let nuevoProd= new Producto (nombre, precio, categoria);
    listaProductosAgregados.push(nuevoProd);
    return nuevoProd;//en consola llamar a la funcion guardarDatos()
}
// function AgregarHtml(){
//     listaProductosAgregados.forEach((prod) =>{
//         let nodo= document.createElement('div');
//         nodo.innerHTML= `<h3>${prod.nombre}</h3>
//         <span> ${prod.precio}</span> 
//         <p>${prod.categoria}</p>`
        
//         contenedor.append (nodo);
    
//     })

// }

    listaProductosAgregados.forEach((prod) =>{
        let nodo= document.createElement('div');
        nodo.innerHTML= `<h3>${prod.nombre}</h3>
        <span> ${prod.precio}</span> 
        <p>${prod.categoria}</p>`
        
        contenedor.append (nodo);
    
    })


