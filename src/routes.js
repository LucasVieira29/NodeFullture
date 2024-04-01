const { Router } = require("express");
const listagemTransacoesController = require("./controllers/listagemTransacoesController.js");
const novaTransacaoController = require("./controllers/novaTransacaoController.js");
const removerTransacaoPorIdController = require("./controllers/removerTransacaoPorIdController.js");
const atualizarTransacaoPorIdController = require("./controllers/atualizarTransacaoPorIdController.js");

const routes = Router();

routes.get("/transacoes", listagemTransacoesController);
routes.post("/transacao", novaTransacaoController);
routes.delete("/transacao/:id", removerTransacaoPorIdController);
routes.put("/transacao/:id", atualizarTransacaoPorIdController);

module.exports = routes;
