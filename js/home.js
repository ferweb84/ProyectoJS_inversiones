const parrafo = document.querySelector("#parrafo");
const boton = document.querySelector("#btn");

const escribir =()=> {
    let texto = prompt("que queres escribir");
    parrafo.textContent = texto;

}

//3 formas de escuchar eventos 
// 1 Metodo addEventListener (Evento, Funcion);

// boton.addEventListener("click",escribir);


// por fuera 
// boton.addEventListener("click",()=>{
//     parrafo.innerText= "Holuuuuuuus chicuuus";
// });

//otra forma 

// boton.addEventListener("click",()=>{
//     escribir();
// });


//2 Forma Reducida el evento es metodo

// boton.onclick = ()=>{escribir()

// }

//3 dentro del HTML (es mala practica para que cada cosa este en su lugar )

//tipos de eventos
//eventos mecanicos 
//1 mouse - mouseover, mouseout, mousemove (alguno de los eventos con el mouse)

// boton.addEventListener("mouseover",()=>{
//     console.log("hola");
// })
// boton.addEventListener("mouseout",()=>{
//     console.log("hola");
// })
// boton.addEventListener("mousemove",()=>{
//     console.log("hola");
// })

//2) De teclado -keydown - keyup
// const text= document.querySelector("#texto");
// text.onkeydown = ()=> {
//     console.log(text.value);
// }
const text= document.querySelector("#texto");
text.onkeyup = ()=> {
    console.log(text.value);
}

//evengos de logica CHANGE registra el cambio cando salimos de foco
text.addEventListener("change",()=>{
    console.log(`el nuevo valor es ${text.value}`);
})


//input (ejecuta muchas veces muchas funciones muchos recursos por ahi no conviene)

text.addEventListener("input",()=>{
    console.log(`el nuevo valor es ${text.value}`);
})
text.addEventListener("keydown",(e)=>{
    console.log(`el nuevo valor es ${e.keyCode}`);
})


const select=document.querySelector("#select");
select.addEventListener("change",()=>{
    console.log(`el usuario eligio la opcion ${select.value}`);
})
const formulario= document.querySelector("form");
formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("se envio formulario");
})

const link = document.querySelector("a");
link.onclick = (e) => {
    e.preventDefault();
    console.log("frene el comportamiento del a  para que no vaya a google");
}