
const formulario = document.getElementById('formCarrito')

const fechaEmiCarrito = document.getElementById('FechaEmiCarrito');

const fechaActual = new Date().toISOString().split('T')[0];
if (fechaEmiCarrito) {
    fechaEmiCarrito.value = fechaActual
}

formulario.addEventListener('submit', e => {
    e.preventDefault();

    const expressionNombre = /^[a-zA-Z\s]+$/;;
    const expressionCelular = /^3\d{9}$/;
    const expressionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const nombreCarrito = document.getElementById('nombreCarrito').value;
    const correoCarrito = document.getElementById('correoCarrito').value;
    const celularCarrito = document.getElementById('telCarrito').value;
    const fechaEveCarrito = document.getElementById('fechaEveCarrito').value;
    const direccionCarrito = document.getElementById('direccionCarrito').value;


    try {
        if (nombreCarrito.trim() === '' || correoCarrito.trim === '' || celularCarrito.trim() === '' || fechaEveCarrito.trim() === '' ||
            direccionCarrito.trim() === '') {
            Swal.fire({
                title: 'Error',
                text: 'Ingrese todos los campos',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else if (!expressionNombre.test(nombreCarrito)) {
            Swal.fire({
                title: 'Error',
                text: 'El campo Nombre Solo permite letras',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else if (!expressionCelular.test(celularCarrito)) {
            Swal.fire({
                title: 'Error',
                text: 'Celular: solo se permiten números que comiencen en 3',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else if (!expressionCorreo.test(correoCarrito)) {
            Swal.fire({
                title: 'Error',
                text: 'Correo: formato de correo invalido',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else if (fechaEveCarrito<= (fechaEmiCarrito.value= fechaActual)) {
            Swal.fire({
                title: 'Error',
                text: 'Fecha: la fecha debe ser mayor a la actual',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        } else {
            Swal.fire({
                title: 'Carrito creado con exito',
                icon: 'sucess'
            }).then(() => {
                window.location.href = 'index.html'
            })
        }




    } catch (e) {
        swal.fire({
            icon: 'error',
            title: 'No se puede crear el carrito',
            text: e
        })
    }



})


// const boton= document.getElementById('btnCancelar').value

// boton.addEventListener('click', (e) => {
//     e.preventDefault()

    


// })
