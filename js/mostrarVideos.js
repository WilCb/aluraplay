// importa a variável que foi exportada do conecta api
import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

export default function constroiCard(titulo, descricao, url, imagem) {
    //variável para criar o elemento 'li'
    const video = document.createElement('li');
    // classe que esta declarada no html
    video.className = 'videos__item';
    // chama o trecho html para dentro do elemento
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>`

    return video;
}

async function listaVideo() {
    try {
        const listaApi = await conectaApi.listaVideos();
        // para cada item da lista da API criou um card, que seria uma li que foi anexada dentro da ul que está dentro do index.html
        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}


listaVideo();