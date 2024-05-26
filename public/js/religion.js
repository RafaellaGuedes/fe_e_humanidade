function confirm() {
    var religiaoVar = document.getElementById('religion_select').value;
    console.log("🐵" + religiaoVar);

    fetch("/religioes/cadastrar_religiao", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            religiaoServer: religiaoVar
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