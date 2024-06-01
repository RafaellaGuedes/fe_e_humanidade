function confirm() {
    var religiaoVar = document.getElementById('religion_select').value;
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    const momentos = new Date().toISOString();
    const momento = momentos.split('.')[0].replace('T', ' ');

    fetch("/religioes/cadastrar_religiao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            religiaoServer: religiaoVar,
            idUsuarioServer: idUsuarioVar,
            momentoServer: momento
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);
            window.location = "./game.html"
        } else {
            console.log('Erro na resposta:', resposta.statusText);
        }

    }).catch(function (erro) {
        console.log('Erro no fetch:', erro);
    })
}