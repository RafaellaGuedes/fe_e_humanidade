var religiaoModel = require("../models/religiaoModel");

function cadastrar_religiao(req, res) {
    var religiao = req.body.religiaoServer; 
    var momento = req.body.momentoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (religiao == undefined) {
        res.status(400).send("Sua religiao está indefinida!");
    } else if(momento == undefined) {
        res.status(400).send("Seu momento está indefinido!");
    } else if(idUsuario == undefined) {
        res.status(400).send("Seu id está indefinido!");
    }else {
        religiaoModel.cadastrar_religiao(religiao, momento, idUsuario)
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

function buscarUltimasReligioes(req, res) {


    religiaoModel.buscarUltimasReligioes().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas religiões.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar_religiao,
    buscarUltimasReligioes
}