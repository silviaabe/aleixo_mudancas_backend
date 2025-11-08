import mongoose from "mongoose";

const dadosFuncionarioSchema = new mongoose.Schema({
  funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Funcionario",
    required: true,
  },

  pernoite: {
    type: Boolean,
    required: false,
  },

  data_pernoite: {
    type: String,
    required: false,
  },

  escada: {
    type: Boolean,
    required: false,
  },

  data_escada: {
    type: String,
    required: false,
  },

  pagar: {
    type: String,
    required: false,
  },
});

const DadosFuncionario = mongoose.model(
  "DadosFuncionario",
  dadosFuncionarioSchema
);
export default DadosFuncionario;
