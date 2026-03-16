function crearPlantilla(titulo, actividad) {
    return `
    <article class="cardsActivity">
        <div>
            <h3 class="titleActivity" >${titulo}</h3>
            <button type="submit" class="buttonX">X</button>
        </div>
        <p class="description" >${actividad}</p>
    </article>
    `;
}

let iniciado = false;

function mostrarInfo() {
    event.preventDefault();

    let inputTitle = document.getElementById("inputTitle");
    let inputDescription = document.getElementById("inputDescription");
    let contenedor = document.getElementById("datos");


    if (inputTitle.value === "" || inputDescription.value === "") {
        alert("Por favor, llena todos los campos");
        return;
    }

    if (iniciado == false) {
        let subtitulo = document.getElementById("containTitle");
        subtitulo.innerHTML = `
        <h2 id="titleSection"> 
            <span id="spantitle"> LISTA DE ACTIVIDADES </span> 
        </h2>
        `;
    }

    contenedor.insertAdjacentHTML('afterbegin', crearPlantilla(inputTitle.value, inputDescription.value));

    inputTitle.value = "";
    inputDescription.value = "";
}