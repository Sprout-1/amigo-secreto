// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo"); 
    let nombre = input.value.trim();

    
    if (nombre === "") {
        alert("Por favor, introduce un nombre.");
        return;
    }

    listaAmigos.push(nombre);
    input.value = "";

    actualizarListaAmigos();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo() {
    
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    
    let amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `🎉 Amigo sorteado: ${amigoSorteado} 🎉`;
}
