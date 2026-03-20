const contenedorDatos = document.getElementById("datos");

const manejarClickEnContenedor = (event) => {
    const elementoClickado = event.target;

    const tarjeta = elementoClickado.closest(".cardsActivity");

    if (elementoClickado.classList.contains("buttonX")) {   
        if (tarjeta) {
            tarjeta.remove();
        }
    }

    if (elementoClickado.classList.contains("buttonE")) {

        const title = tarjeta.querySelector(".titleActivity");
        const descripcion = tarjeta.querySelector(".description");
        
        descripcion.classList.toggle("edit");
        title.classList.toggle("edit");

        if (descripcion.contentEditable !== "true") {

            title.contentEditable = "true";
            descripcion.contentEditable = "true";
            descripcion.focus();  

            elementoClickado.src = "./resource/disco.png";
            elementoClickado.title = "Guardar";
            const removePoint = title.querySelector(".twoPoints")
            removePoint.remove();

        } else {
            title.textContent = title.textContent.trim(); 
            /* descripcion.textContent = descripcion.textContent.trim(); */

            title.insertAdjacentHTML('beforeend','<span class="twoPoints">:</span>');

            elementoClickado.src = "./resource/lapiz.png";
            elementoClickado.title = "Editar";

            descripcion.contentEditable = "false";
            title.contentEditable = "false";
        }
    }
};

contenedorDatos.addEventListener("click", manejarClickEnContenedor);