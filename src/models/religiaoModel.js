var database = require("../database/config");

function cadastrar_religiao(religiao, momento, idUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_religiao():", religiao);

    var instrucaoSql = `
        INSERT INTO religiao (religiao, momentoReligiao, fkUsuario) VALUES ('${religiao}', '${momento}', '${idUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasReligioes() {
    var instrucaoSql = `SELECT religiao, COUNT(religiao) AS quantidade FROM religiao GROUP BY religiao`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar_religiao,
    buscarUltimasReligioes,
};