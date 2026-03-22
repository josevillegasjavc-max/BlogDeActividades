function crearPlantilla(titulo, actividad) {
    return `
    <article class="cardsActivity">
        <div class="centerActivity">
            <div class="infoContainer">
                <h3 class="titleActivity">
                    <span class="spanTitle">${titulo}</span><span class="twoPoints">:</span>
                </h3>
                <p class="description" >${actividad}</p>
            </div>

            <div class="containButtons">
                <img draggable="false" src="./resource/basura.png" alt="Icono de elimina actividad" class="buttons buttonX" title="Eliminar">
                <img draggable="false" src="./resource/lapiz.png" alt="Icono de editar actividad" class="buttons buttonE" title="Editar">
            </div>
        <div>
    </article>
    `;
}

const btn = document.querySelector(".button");
btn.addEventListener('click', (event) => {
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
});