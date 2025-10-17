import mongoose from "mongoose";

const funcionarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  equipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipe",
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["ativo", "inativado"],
    default: "ativo",
  },
});

const Funcionario = mongoose.model("Funcionario", funcionarioSchema);
export default Funcionario;
