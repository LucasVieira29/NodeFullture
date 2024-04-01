const { Schema, model } = require("mongoose");

const TransacaoSchema = new Schema(
  {
    "id": Number,
    "titulo": String,
    "tipo": String,
    "valor":Number,
    "data": String
    },

  { timestamps: true }
);

module.exports = model("transacoes", TransacaoSchema);
