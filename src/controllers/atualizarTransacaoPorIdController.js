const atualizarTransacaoPorIdUseCase = require("../useCases/atualizarTransacaoPorIdUseCase");

async function atualizarTransacaoPorIdController(req, res) {
  const { id } = req.params;
  const dados = req.body;

  if (!id) {
    return res.status(400).send({
      message: "O ID da Transacao para atualização deve ser informado",
    });
  }
  const { success, httpCode, errorMessage } =
    await atualizarTransacaoPorIdUseCase.execute(id, dados);
  if (!success) {
    return res.status(httpCode).send({ message: errorMessage });
  }

  return res.send();
}

module.exports = atualizarTransacaoPorIdController;
