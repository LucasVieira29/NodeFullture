const TransacaoRepositoryNoSQL = require("../repositories/transacaoRepositoryNoSQL");
async function execute() {
  const repository = new TransacaoRepositoryNoSQL();
  const transacoes = await repository.findAll();
  return transacoes;
}

module.exports = { execute };
