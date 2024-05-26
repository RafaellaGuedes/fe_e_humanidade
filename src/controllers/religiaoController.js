var religiaoModel = require("../models/religiaoModel");

function cadastrar_religiao(req, res) {
    var religiao = req.body.religiaoServer; 

    if (religiao == undefined) {
        res.status(400).send("Sua religiao está indefinida!");
    } else {

        religiaoModel.cadastrar_religiao(religiao)
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
    cadastrar_religiao
}