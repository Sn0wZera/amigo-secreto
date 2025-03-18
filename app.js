let amigos = [];  


function adicionarAmigo() {
    const input = document.getElementById("amigo"); 
    const nome = input.value.trim(); 

    if (nome) {
        amigos.push(nome); 
        atualizarListaAmigos(); 
    }
    input.value = ''; 
}


function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ''; 
  
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.textContent = "Adicione amigos à lista antes de sortear.";
        return;
    }

    const amigoSorteado = drawFriend(amigos);
    resultado.textContent = amigoSorteado;
}


function drawFriend(friendsList) {
    if (friendsList.length === 0) {
        return "A lista está vazia!";
    }
    const randomIndex = Math.floor(Math.random() * friendsList.length);
    return `O amigo sorteado é: ${friendsList[randomIndex]}`;
}

