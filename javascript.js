//Señalando megacontainer
const megacontainer = document.querySelector(".megacontainer");


for(i = 0; i < 64; i++){
    const newContainer = document.createElement("p");
    newContainer.classList.add("grid");
    megacontainer.appendChild(newContainer);
}