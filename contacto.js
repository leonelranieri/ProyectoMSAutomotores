"use strict";

function enviar(form) {
    const nombre = form.nombre.value;
    const apellido = form.apellido.value;
    const Email = form.mail.value;
    const tel = form.telefono.value;
    const comentario = form.comentario.value;
    const motivo_contacto_element = document.querySelector('input[name="motivo"]:checked');
    const motivo_contacto = motivo_contacto_element ? motivo_contacto_element.value : '';

    
    
    if (controlDeNumeros(tel) && validarNombreApellido(nombre) && validarNombreApellido(apellido)){
        const param = {
            nom: nombre,
            ape: apellido,
            email: Email,
            telef: tel,
            coment: comentario,
            motivo: motivo_contacto,
        }

        // Enviar datos del formulario a través de una solicitud HTTP (fetch) 
        /*fetch('/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(param).toString(),
        })
            .then(response => {
                if (response.ok) {
                    alert("Formulario enviado con éxito");
                    console.log(param);
                    resetForm();
                } else {
                    alert("Error al enviar el formulario");
                }
            })
            .catch(error => {
                console.error('Error en la solicitud:', error);
                alert("Error al enviar el formulario");
            }); 

        return false; // Evitar que el formulario se envíe directamente*/

    
        alert("Formulario enviado con éxito");

        return true; 
    }

}

function controlDeNumeros(tel) {
       var telPattern = /^\d+$/;
   
       if (!telPattern.test(tel)) {
           alert("El campo Teléfono debe contener solo números.");
           return false; // Impide que se envíe el formulario
       }

       return true;
}

function validarNombreApellido(valor) {
    var regex = /^[A-Za-z\s]+$/; // Acepta letras y espacios en blanco

    if (!regex.test(valor)) {
        alert("El campo debe contener solo letras y espacios.");
        return false; // Impide que se envíe el formulario
    }

    return true;
}

function resetForm(){
    document.querySelector("form").reset();
}
