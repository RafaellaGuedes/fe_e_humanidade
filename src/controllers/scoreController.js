var scoreModel = require("../models/scoreModel");

function cadastrar_score(req, res) {
    var score = req.body.pontuacaoServer; 

    if (score == undefined) {
        res.status(400).send("Sua pontuação está indefinida!");
    } else {

        scoreModel.cadastrar_score(score)
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

module.exports = {
    cadastrar_score
}