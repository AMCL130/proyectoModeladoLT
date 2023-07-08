document.addEventListener("DOMContentLoaded", function() {
    var options = document.querySelectorAll(".option");
  
    options.forEach(function(option) {
      option.addEventListener("click", function() {
        options.forEach(function(option) {
          option.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });

  function mostrarServicio() {
    var nombre = document.getElementById('nombreServicio').value;
    var descripcion = document.getElementById('descripcion').value;
    var precio = document.getElementById('precioUnitario').value;
    console.log (mostrarServicio)
  
    if (nombre.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese el nombre',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!isNaN(nombre)) {
      Swal.fire({
        title: 'Error',
        text: 'El campo Nombre no puede ser un número',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (descripcion.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese la descripción',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (precio <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese un valor válido para el precio',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Creación exitosa',
        showConfirmButton: true,
      }).then(() => {
        $('#crearServicioModal').modal('hide');
      });
    }
  }

  function mostrarEditar() {
    var nombre = document.getElementById('nombreEditar').value;
    var descripcion = document.getElementById('descripcionEditar').value;
    var precio = document.getElementById('precioUnitarioEditar').value;
    console.log (mostrarServicio)
  
    if (nombre.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese el nombre',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (!isNaN(nombre)) {
      Swal.fire({
        title: 'Error',
        text: 'El campo Nombre no puede ser un número',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (descripcion.trim() === '') {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese la descripción',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else if (precio <= 0) {
      Swal.fire({
        title: 'Error',
        text: 'Ingrese un valor válido para el precio',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Edición exitosa',
        showConfirmButton: true,
      }).then(() => {
        $('#editarServicioModal').modal('hide');
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    var toggleButtons = document.querySelectorAll('#toggleButton');
    toggleButtons.forEach(function(toggleButton) {
      toggleButton.addEventListener('click', function() {
        if (toggleButton.innerText === 'Activo') {
          toggleButton.innerText = 'Inactivo';
          toggleButton.classList.remove('btn-danger');
          toggleButton.classList.add('btn-secondary');
        } else {
          toggleButton.innerText = 'Activo';
          toggleButton.classList.remove('btn-secondary');
          toggleButton.classList.add('btn-danger');
        }
      });
    });
  });