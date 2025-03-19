// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Array para guardar los amigos
let amigos = [];

// Referencias a los elementos del DOM
const inputNombre = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim();  // Obtener el valor y eliminar espacios innecesarios

    // Validar si el campo está vacío
    if (nombre === '') {
        alert("Por favor, ingresa un nombre.");  // Mostrar una alerta
        return;
    }

    // Agregar el amigo al array
    amigos.push(nombre);

    // Ordenar el array alfabéticamente
    amigos.sort();

    // Limpiar el campo de texto
    inputNombre.value = '';

    // Actualizar la lista de amigos en la pantalla
    actualizarListaAmigos();
}

// Función para actualizar la lista de amigos en la pantalla
function actualizarListaAmigos() {
    listaAmigos.innerHTML = '';  // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");  // Mostrar una alerta
        return;
    }

    // Elegir un amigo al azar
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Mostrar el resultado
    resultado.innerHTML = `<p><strong>El amigo secreto es:</strong> ${amigoSorteado}</p>`;
}
