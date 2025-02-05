//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let amigo = document.querySelector('input');
    if (amigo.value){
        amigos.push(amigo.value)
        amigo.value = '';
        listarAmigos()
    }
    else {
        alert ("Por favor, insira um nome.")
    }

}

function listarAmigos(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML=""
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML+= `<li>${amigos[i]}</li>`
    }
}

function sortearAmigo () {
    if (amigos.length>0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[indiceAleatorio]
        let resultado = document.getElementById("resultado");
        resultado.innerHTML=amigoSorteado
    }
}