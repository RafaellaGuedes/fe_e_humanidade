var express = require("express");
var router = express.Router();

var comentariosController = require("../controllers/comentariosController");

router.post("/cadastrar_comentarios", function (req, res) {
    comentariosController.cadastrar_comentario(req, res);
});

router.get("/ultimas", function (req, res) {
    comentariosController.buscarUltimosComentarios(req, res);
});

module.exports = router;