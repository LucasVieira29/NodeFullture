const TransacaoRepositoryNoSQL = require("../repositories/transacaoRepositoryNoSQL");
async function execute(_id, dados) {
  const repository = new TransacaoRepositoryNoSQL();
  const transacaoAtual = await repository.findById(_id);

  
  try {
    await repository.updateById(_id, dados);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar fazer uma atualização na transacao, tente novamente mais tarde.",
    };
  }
}

module.exports = { execute };
