function crearPlantilla(titulo, actividad) {
    return `
    <article class="cardsActivity">
        <h2 class="titleActivity" >${titulo}</h2>
        <p class="description" >${actividad}</p>
    </arcticle>
    `;
}

function mostrarInfo() {
event.preventDefault();

let inputTitle = document.getElementById("title");
let inputDescription = document.getElementById("inputDescription");
let contenedor = document.getElementById("datos");

if (inputTitle.value === "" || inputDescription.value === "") {
    alert("Por favor, llena todos los campos");
    return;
}

contenedor.insertAdjacentHTML('afterbegin', crearPlantilla(inputTitle.value, inputDescription.value));

inputTitle.value = "";
inputDescription.value = "";
}


