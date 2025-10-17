import mongoose from "mongoose";

const veiculoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },

  status: {
    type: String,
    enum: ["ativo", "inativado"],
    default: "ativo",
  },
});

const Veiculo = mongoose.model("Veiculo", veiculoSchema);
export default Veiculo;
