function crearPlantilla(titulo, actividad) {
    return `
    <article class="cardsActivity">
        <div>
            <h3 class="titleActivity" >${titulo}:</h3>
            <img src="./resource/basura-circular.png" alt="Icono de elimina actividad" class="buttonX">
        </div>
        <p class="description" >${actividad}</p>
    </article>
    `;
}

function mostrarInfo() {
    event.preventDefault();

    let inputTitle = document.getElementById("inputTitle");
    let inputDescription = document.getElementById("inputDescription");
    let contenedor = document.getElementById("datos");

    let tituloLimpio = inputTitle.value.trim();
    let descripcionLimpia = inputDescription.value.trim();

    if (tituloLimpio === "" || descripcionLimpia === "") {
        alert("Por favor, llena todos los campos");
        return;
    }

    contenedor.insertAdjacentHTML('afterbegin', crearPlantilla(inputTitle.value, inputDescription.value));

    inputTitle.value = "";
    inputDescription.value = "";
}

const contenedorDatos = document.getElementById("datos");

const manejarClickEnContenedor = (event) => {
    const elementoClickado = event.target;

    if (elementoClickado.classList.contains("buttonX")) {
        
        const tarjeta = elementoClickado.closest(".cardsActivity");
        
        if (tarjeta) {
            tarjeta.remove();
        }
    }
};

contenedorDatos.addEventListener("click", manejarClickEnContenedor);