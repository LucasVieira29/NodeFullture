const TransacaoRepositoryNoSQL = require("../repositories/transacaoRepositoryNoSQL");
async function execute(_id) {
  const repository = new TransacaoRepositoryNoSQL();
  try {
    await repository.removeById(_id);
    return {
      success: true,
    };
  } catch (error) {
    return {
      success: false,
      httpCode: 500,
      errorMessage:
        "Ocorreu um erro ao tentar excluir a transacao, tente novamente mais tarde.",
    };
  }
}

module.exports = { execute };
