var database = require("../database/config");

function cadastrar_score(score, momento, idUsuario) {

    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_score():", score);

    var instrucaoSql = `
        INSERT INTO game (pontos, momento, fkUsuario) VALUES ('${score}', '${momento}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

const limite_linhas = 6;

function buscarUltimosPontos(idUsuarioB, limite_linhas,) {

    var instrucaoSql = `SELECT 
        pontos as Pontos, 
        momento,
        DATE_FORMAT(momento,'%H:%i:%s'),
        fkUsuario
        FROM game
        WHERE fkUsuario = ${idUsuarioB}
        ORDER BY idGame DESC LIMIT ${limite_linhas}`;
        
        console.log("idUsuario:", idUsuarioB);
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar_score,
    buscarUltimosPontos,
}