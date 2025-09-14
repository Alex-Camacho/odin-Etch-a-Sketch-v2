//Señalando megacontainer
const megacontainer = document.querySelector(".megacontainer");

//Loop para crear celda 8x8 añadiendo clase
//.grid a los elementos, por defecto al iniciar.
for(i = 0; i < 64; i++){
    const newContainer = document.createElement("p");
    newContainer.classList.add("grid", "grid-8");
    megacontainer.appendChild(newContainer);
}

//EventListener hover rojo por defecto
megacontainer.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("grid")) {
    e.target.style.backgroundColor = "red";
  }
});

//Función de color random

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


//Señalando button 16x16, borra cells y crea el número correcto

const button16 = document.querySelector("#button16");
button16.addEventListener("click", () =>{
    const cells = document.querySelectorAll(".grid");
    cells.forEach(cell =>{
        cell.remove();
    })

    for(i = 0; i < 256; i++){
    //añadir que cambie el height de .grid
    const newContainer = document.createElement("p");
    newContainer.classList.add("grid", "grid-16");
    megacontainer.appendChild(newContainer);
}
})

//Misma acción con button 8x8

const button8 = document.querySelector("#button8");
button8.addEventListener("click", () =>{
    const cells = document.querySelectorAll(".grid");
    cells.forEach(cell =>{
        cell.remove();
    })

    for(i = 0; i < 64; i++){
    //añadir que cambie el height de .grid
    const newContainer = document.createElement("p");
    newContainer.classList.add("grid", "grid-8");
    megacontainer.appendChild(newContainer);
}
})

//Señalar button Rainbow y generar colores random
const rainbowbutton = document.querySelector("#rainbowbutton");

rainbowbutton.addEventListener("click", ()=>{
    megacontainer.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("grid")) {
            e.target.style.backgroundColor = randomColor();
        }
    });
})


//Señalar button Rojo y generar color rojo
const redbutton = document.querySelector("#redbutton");

redbutton.addEventListener("click", ()=>{
    megacontainer.addEventListener("mouseover", (e) => {
        if (e.target.classList.contains("grid")) {
            e.target.style.backgroundColor = "red";
        }
    });
})

//Borrar celdas con botón Clear

const clearbutton = document.querySelector("#clearbutton");
clearbutton.addEventListener("click", ()=>{
    const cells = document.querySelectorAll(".grid");
    cells.forEach(cell =>{
        cell.style.backgroundColor = "white";
    })
})