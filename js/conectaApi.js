// colocar o termo async defini a função como assíncrona
async function listaVideos() {
    const conexao = await fetch('http://localhost:3000/videos') //após o async, inserir o await fetch, o await vai esperar o fetch terminar o que precisa fazer para retornar o resultado da requisição
    const conexaoConvertida = await conexao.json();

    // retorna a conexão convertida
    return conexaoConvertida;
}

async function criarVideos(titulo, descricao, url, imagem) {

    // recebe os dados do arquivo json na variável com GET e entre chaves chama o metodo post para mudar o tipo de requisição
    const conexao = await fetch('http://localhost:3000/videos', {
        method: 'POST',
        headers: {
            // O content-type especifica o tipo de arquivo que esta sendo enviado ou recebido e especificamos em application que estamos
            // recebendo um arquivo em json
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            // dentro da chave para enviar como objeto
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    if (!conexao.ok) {
        throw new Error('Não foi possível enviar o vídeo')
    }
    // converte para json
    const conexaoConvertida = await conexao.json();

    // retorna o arquivo convertido
    return conexaoConvertida;
}

async function buscaVideo(temoDeBusca) {
    // utilizado a template string para poder utilizar a variável onde vou colocar o nome do video que quero buscar
    const conexao = await fetch(`http://localhost:3000/videos?q=${temoDeBusca}`);
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

// export vai exportar a variável chamada conectaApi
// onde a mesma recebe o objeto cheio de funções
export const conectaApi = {
    listaVideos,
    criarVideos,
    buscaVideo
}
