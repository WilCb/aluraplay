import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);
    const lista = document.querySelector('[data-lista]')

    // enquanto a condição for verdadeira, remove o primeiro filho e fica somente o digitado
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Nenhum vídeo encontrado com esse nome !</h2>`
    }
}

const botaoDePesquisa = document.querySelector('[data-bota-pesquisa]');

// ouvinte para saber quando o botão for clicado
botaoDePesquisa.addEventListener('click', evento => buscarVideo(evento));