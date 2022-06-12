console.log("Hola mundo desde Java script");

//1. DOM se pone el objeto document que se refiere a todo el documento html
/*
let links = document.querySelectorAll("a");

links.forEach(function(links)
{
    console.log(links);
}
);
*/


let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    icono.classList.remove("fa-regular");
    icono.classList.add("fa-regular");
    
    
})

