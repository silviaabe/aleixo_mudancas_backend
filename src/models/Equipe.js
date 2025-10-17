import mongoose from "mongoose";

const equipeSchema = new mongoose.Schema({
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

const Equipe = mongoose.model("Equipe", equipeSchema);
export default Equipe;
