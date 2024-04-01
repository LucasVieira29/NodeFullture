const removerTransacaoPorIdUseCase = require("../useCases/removerTransacaoPorIdUseCase");

async function removerTransacaoPorIdController(req, res) {
  const { id } = req.params;

  if (!id) {
    return res.status(400).send({
      message: "O ID da Transacao para exclusão deve ser informado",
    });
  }
  const { success, httpCode, errorMessage } =
    await removerTransacaoPorIdUseCase.execute(id);
  if (!success) {
    return res.status(httpCode).send({ message: errorMessage });
  }

  return res.send();
}

module.exports = removerTransacaoPorIdController;
