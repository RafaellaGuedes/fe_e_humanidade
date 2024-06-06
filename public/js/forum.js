function send() {
    var comentarioVar = document.getElementById('input_comment').value;
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    const momentos = new Date().toISOString();
    const momento = momentos.split('.')[0].replace('T', ' ');

    fetch("/comentarios/cadastrar_comentario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            comentariosServer: comentarioVar,
            idUsuarioServer: idUsuarioVar,
            momentoServer: momento
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);
        } else {
            console.log('Erro na resposta:', resposta.statusText);
        }

    }).catch(function (erro) {
        console.log('Erro no fetch:', erro);
    })
}

function obterDadosComentario(idUsuario) {

    var idUsuario = sessionStorage.ID_USUARIO;
    var nomeUsuario = sessionStorage.NOME_USUARIO;

    alterarNome();

    fetch(`/comentarios/buscarUltimosComentarios/${idUsuario}`, { cache: 'no-store' }).then(function (response) {
        if (response.ok) {
            response.json().then(function (resposta) {
                console.log(`Comentários recebidos: ${JSON.stringify(resposta)}`);
                resposta.reverse();

                plotarComentario(resposta, idUsuario);
            });
        } else {
            console.error('Nenhum comentário encontrado ou erro na API');
        }
    })
        .catch(function (error) {
            console.error(`Erro na obtenção dos comentários: ${error.message}`);
        });
}

function plotarComentario(resposta) {

    console.log('iniciando plotagem dos comentários...');

    let comentarios = [];
    let momento = [];

    console.log('----------------------------------------------')
    console.log('Estes dados foram recebidos pela funcao "obterDadosComentarios" e passados para "plotarComentarios":')
    console.log(resposta)

    for (var i = 0; i < resposta.length; i++) {
        var registro = resposta[i];
        comentarios.push(registro.comentario);
        momento.push(registro.momento);
        // comment_name.innerHTML += `${nomeUsuario}`;
        // comment_section.innerHTML += `${comentarios[i]}`; 
    }

}