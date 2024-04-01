const mongoose = require("mongoose");

async function startConnection() {
  try {
    await mongoose.connect("mongodb://localhost:27017/dbTransacoes");
  } catch (error) {
    throw new Error("Erro ao tentar se conectar com o servidor");
  }
}

async function stopConnection() {
  try {
    await mongoose.disconnect();
  } catch (error) {
    throw new Error("Erro ao tentar se desconectar com o servidor");
  }
}

module.exports = { startConnection, stopConnection };
