var express = require("express");
var router = express.Router();

var religiaoController = require("../controllers/religiaoController");

router.post("/cadastrar_religiao", function (req, res) {
    religiaoController.cadastrar_religiao(req, res);
})

module.exports = router;