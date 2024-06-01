var express = require("express");
var router = express.Router();

var scoreController = require("../controllers/scoreController");

router.post("/cadastrar_score", function (req, res) {
    scoreController.cadastrar_score(req, res);
});

router.get("/buscarUltimosPontos/:idUsuario", function (req, res) {
    scoreController.buscarUltimosPontos(req, res);
});

module.exports = router;