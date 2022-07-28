
class Producto {
    constructor(nombre, precio,categoria,imagen){
        this.id=id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen=imagen;

    }
}
let listaProductos = [
    {id:1,nombre: 'remera', precio: 3000,categoria:' indumentaria',imagen:"remera"},
    {id:2,nombre: 'gorra', precio: 2500,categoria:' indumentaria',imagen:"gorra"},
    {id:3,nombre: 'agenda', precio: 1800,categoria:'papeleria',imagen:"agenda"},
    {id:4,nombre: 'computadora',precio: 80000,categoria:' informatica',imagen:"computadora"},
    {id:5,nombre: 'lapicera', precio: 700,categoria:' papeleria',imagen:"lapicera"},

];

const guardarDatos= ()=> {
    let id= document.getElementById("id").value;
    let nombre = document.getElementById('nombre').value;
    let precio = document.getElementById('precio').value;
    let categoria = document.getElementById('categoria').value;
    let imagen=document.getElementById("imagen").value;

    let nuevoProd= new Producto (id,nombre, precio, categoria,imagen);
    listaProductosAgregados.push(nuevoProd);
    return nuevoProd;//en consola llamar a la funcion guardarDatos()
}


function AgregarHtml(){
    listaProductosAgregados.forEach((prod) =>{
        let nodo= document.createElement('div');
        nodo.innerHTML= `<h3>${prod.nombre}</h3>
        <span> ${prod.precio}</span> 
        <p>${prod.categoria}</p>`
        
        contenedor.append (nodo);
    
    })
}