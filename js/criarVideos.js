import { conectaApi } from './conectaApi.js';

const formulario = document.querySelector('[data-formulario]')

async function criarVideo(evento) {
    evento.preventDefault();
    const imagem = document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;

    // gera um número aleatorio com random, o floor transforma em n° inteiro e pega o menor número, .toString() transforma em string
    // serve para simular a visualização já que não teremos um contador de cliques nos videos
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await conectaApi.criarVideos(titulo, descricao, url, imagem);

        // chama o html de concluido que aparece após concluir cadastro do video
        window.location.href = '../pages/envio-concluido.html'
    } catch (e) {
        alert(e);
    }
}

// addEventListener é um ouvinte de evento para saber quando foi enviado um formalario
// como padrão ele atualiza a pagina e para evitar isso, cria a função com preventDefault() em criarVideos
formulario.addEventListener('submit', evento => criarVideo(evento));