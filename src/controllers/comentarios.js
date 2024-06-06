var comentariosModel = require("../models/comentariosModel");

function cadastrar_comentario(req, res) {
    var comentarios = req.body.comentariosServer; 
    var momento = req.body.momentoServer;
    var idUsuario = req.body.idUsuarioServer;

    if (comentarios == undefined) {
        res.status(400).send("Sua comentarios está indefinida!");
    } else if(momento == undefined) {
        res.status(400).send("Seu momento está indefinido!");
    } else if(idUsuario == undefined) {
        res.status(400).send("Seu id está indefinido!");
    }else {
        comentariosModel.cadastrar_comentarios(comentarios, momento, idUsuario)
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


    comentariosModel.buscarUltimasReligioes().then(function (resultado) {
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
    cadastrar_comentarios,
    buscarUltimasReligioes
}