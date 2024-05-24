// var tentativas = 3;

function login() {
    var email = input_email.value;
    var senha = input_senha.value;

    // if (email == "" || senha == "") {

    //     alert("Preencha todos os campos para continuar!")

    // } else {

    //     for (var i = tentativas; i > 0; i--) {

    //         if (email != "" || senha != "") {

    //             tentativas--
    //             i = tentativas;

    //             alert(`Login inválido! Restam ${i} tentativas`);

    //         } else if (email == "" && senha == "") {
    //             window.location.href = 'game.html';

    //             input_email = '';
    //             input_senha = '';

    //             tentativas = 3;

    //             break
    //         }

    //     }

    //     if (tentativas == 0) {

    //         alert("Você não tem mais tentativas.");

    //         window.location.href = 'cadastro.html';
    //     }

    // }

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: email,
            senhaServer: senha
        })
    }).then(function (resposta) {

        if (resposta.ok) {
            console.log(resposta);
            window.location = "./religioes.html"
            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.EMAIL_USUARIO = json.email;
                sessionStorage.NOME_USUARIO = json.nome;
            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);
            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })
}