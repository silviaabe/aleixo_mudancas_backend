import mongoose from "mongoose";

const dadosFuncionarioSchema = new mongoose.Schema({
  funcionario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Funcionario",
    required: true,
  },

  pernoite: {
    type: Boolean,
    required: true,
  },

  dataPernoite: {
    type: String,
    required: true,
  },

  escada: {
    type: Boolean,
    required: true,
  },

  dataEscada: {
    type: String,
    required: true,
  },
});

const DadosFuncionario = mongoose.model(
  "DadosFuncionario",
  dadosFuncionarioSchema
);
export default DadosFuncionario;
