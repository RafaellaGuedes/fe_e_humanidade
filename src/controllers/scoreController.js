var scoreModel = require("../models/scoreModel");

function cadastrar_score(req, res) {
    var score = req.body.pontuacaoServer;
    var momento = req.body.momentoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (score == undefined) {
        res.status(400).send("Sua pontuação está indefinida!");
    } else if(momento == undefined) {
        res.status(400).send("Seu momento está indefinido!");
    } else if(idUsuario == undefined) {
        res.status(400).send("Seu id está indefinido!");
    } else {

        scoreModel.cadastrar_score(score, momento, idUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da religião! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function buscarUltimosPontos(req, res) {

    const limite_linhas = 6;
    var idUsuarioB = req.params.idUsuario;

    console.log(`Recuperando os ultimos ${limite_linhas} pontos`);

    scoreModel.buscarUltimosPontos(idUsuarioB, limite_linhas).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar os ultimos pontos.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar_score,    
    buscarUltimosPontos,
}