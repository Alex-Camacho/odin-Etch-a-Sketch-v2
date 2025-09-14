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

