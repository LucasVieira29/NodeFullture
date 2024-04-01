const listagemTransacoesUseCase = require("../useCases/listagemTransacoesUseCase");

async function listagemTransacoesController(req, res) {
  const transacoes = await listagemTransacoesUseCase.execute();
  return res.send(transacoes);
}

module.exports = listagemTransacoesController;
