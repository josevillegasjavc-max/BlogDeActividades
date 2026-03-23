function removeAnimation(elementoBorrado) {
elementoBorrado.classList.add("fade-out");
    setTimeout(() => {
        elementoBorrado.remove();
    }, 400); 
};

function editMode(edit, btno, title, desc) {
    title.contentEditable = edit;
    desc.contentEditable = edit;

    btno.src = edit ? "./resource/disco.png" : "./resource/lapiz.png";
    btno.title = edit ? "Guardar" : "Editar";

    title.classList.toggle("edit", edit);
    desc.classList.toggle("edit", edit);
};

const contenedorDatos = document.getElementById("datos");

const manejarClickEnContenedor = (event) => {
    const elementoClickado = event.target;
    const tarjeta = elementoClickado.closest(".cardsActivity");

    if (!tarjeta) return;

    if (elementoClickado.classList.contains("buttonX")) {   
        if (tarjeta) {
            removeAnimation(tarjeta);
        }
    }

    if (elementoClickado.classList.contains("buttonE")) {
        const title = tarjeta.querySelector(".titleActivity");
        const descripcion = tarjeta.querySelector(".description");
        const isCurrentlyEditing = descripcion.contentEditable === "true";

        if (!isCurrentlyEditing) {
            editMode(true, elementoClickado, title, descripcion)
            descripcion.focus();  

            const removePoint = title.querySelector(".twoPoints")
            removePoint.remove();
        } 

        else {
            const textoLimpio = title.textContent.trim();
            if (textoLimpio === "") {
                removeAnimation(tarjeta);
                return;
            } else if (descripcion.textContent === "") {
                descripcion.innerHTML = `La Actividad No Tiene Descripcion`;
            }

            title.innerHTML = `<span class="spanTitle">${textoLimpio}</span><span class="twoPoints">:</span>`;
            editMode(false, elementoClickado, title, descripcion);
        }
    }
};

contenedorDatos.addEventListener("click", manejarClickEnContenedor);