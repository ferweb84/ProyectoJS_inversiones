
const select = document.querySelector("#ticker");
ticker.addEventListener("change",()=>{
    console.log (`Seleccionaste la Criptomoneda ${ticker.value}`);
    
})
text.addEventListener("keydown",(e)=>{
    console.log(`el nuevo valor es ${e.keyCode}`);
})


// const select1 = document.querySelector("#ticker");
// ticker.addEventListener("input",()=>{
//     console.log (`Seleccionaste la Criptomoneda ${ticker.value}`);
    
// })


const link = document.querySelector("#fuentes");
link.onclick = (e) => {
    e.preventDefault();
    console.log("frene el comportamiento de google finance");
}

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",(e)=> {
    e.preventDefault();
    console.log("se envio el Formulario")
})