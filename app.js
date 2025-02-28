
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []; // Lista de amigos

// Función para agregar nombres a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya ha sido agregado.");
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    input.value = ""; // Limpiar el input
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear los amigos secretos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debe haber al menos 2 participantes.");
        return;
    }

    let asignaciones = [...amigos]; // Copia de la lista
    let resultado = [];

    do {
        asignaciones = asignaciones.sort(() => Math.random() - 0.5);
    } while (asignaciones.some((amigo, i) => amigo === amigos[i]));

    amigos.forEach((amigo, i) => {
        resultado.push(`${amigo} → ${asignaciones[i]}`);
    });

    mostrarResultado(resultado);
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = ""; // Limpiar antes de actualizar

    resultado.forEach((asignacion) => {
        const li = document.createElement("li");
        li.textContent = asignacion;
        resultadoLista.appendChild(li);
    });
}
