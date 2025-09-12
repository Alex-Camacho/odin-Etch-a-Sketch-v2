//Señalando megacontainer
const megacontainer = document.querySelector(".megacontainer");

//Loop para crear celda 8x8,
//añadiendo clase .grid a los elementos
for(i = 0; i < 64; i++){
    const newContainer = document.createElement("p");
    newContainer.classList.add("grid");
    megacontainer.appendChild(newContainer);
}

//EventListener hover
const cells = document.querySelectorAll(".grid");
cells.forEach(cell => {
    cell.addEventListener("mouseover", () =>{
    event.currentTarget.style.backgroundColor = "red";
    })
})
