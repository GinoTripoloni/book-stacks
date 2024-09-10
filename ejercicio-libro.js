// Obtenemos los elementos del DOM
const botonAgregar = document.getElementById('agregarLibro');
const botonEliminar = document.getElementById('borrarLibro');
const listaLibros = document.getElementById('almacenadoDeLibros');
const inputLibro = document.getElementById('inputDelUsuario');
const mensajeListaVacia = document.getElementById('listaVacia');
const ingresarLibro = document.getElementById('inputVacio');
const noHayLibros = document.getElementById('sinLibros');


// Función para gestionar el switch de las acciones
function manejarAcciones(accion) {
    switch (accion) {
        case 'agregar':
            // Tomamos el valor ingresado en el input
            const nombreLibro = inputLibro.value;
            
            // Verificamos que el campo no esté vacío
            if (nombreLibro !== '') {
                // Creamos un nuevo elemento <li> para añadir a la lista
                const nuevoLibroAlmacenado = document.createElement('li');
                nuevoLibroAlmacenado.textContent = nombreLibro;
                listaLibros.appendChild(nuevoLibroAlmacenado);
                
                // Limpiamos el input después de agregar el libro
                inputLibro.value = '';
                mensajeListaVacia.style.display = 'none';  // Ocultamos el mensaje de "El listado está vacío"
            } else {
                // Mostramos el mensaje de "Debe ingresar un libro"
                ingresarLibro.style.display = 'block';
            }
            break;
        
        case 'eliminar':
            // Eliminamos el último libro de la lista
            const ultimoLibro = listaLibros.lastElementChild;
            if (ultimoLibro) {
                listaLibros.removeChild(ultimoLibro);
            } else {
                noHayLibros.style.display = 'block';
            }

            // Si la lista queda vacía, mostramos el mensaje de "El listado está vacío"
            if (!listaLibros.hasChildNodes()) {
                mensajeListaVacia.style.display = 'inline';
            }
            break;

        default:
            console.log('Acción no reconocida');
    }
}

// Ocultamos el mensaje de ingresar libro al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', function(event) {
    // Si el elemento clicado no es el botón de eliminar
    if (event.target !== botonEliminar) {
        noHayLibros.style.display = 'none';
    }
});

// Ocultamos el mensaje de No Hay Libros al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', function(event) {
    // Si el elemento clicado no es el input ni el botón de agregar
    if (event.target !== inputLibro && event.target !== botonAgregar) {
        ingresarLibro.style.display = 'none';
    }
});

// Vinculamos los botones con las acciones
botonAgregar.addEventListener('click', () => manejarAcciones('agregar'));
botonEliminar.addEventListener('click', () => manejarAcciones('eliminar'));