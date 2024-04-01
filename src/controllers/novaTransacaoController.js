const novaTransacaoUseCase = require("../useCases/novaTransacaoUseCase");

async function novaTransacaoController(req, res) {
  const transacao = req.body;
  const { id,titulo,tipo,valor } = transacao;
  if (!id || !titulo || !tipo || !valor ) {
    return res.status(400).send({
      message:
        "Todos os campos devem ser preenchidos: id, tittulo, tipo, valor,",
    });
  }
  const { success, httpCode, errorMessage } = await novaTransacaoUseCase.execute(
    transacao
  );
  if (!success) {
    return res.status(httpCode).send({ message: errorMessage });
  }

  return res.send();
}

module.exports = novaTransacaoController;
