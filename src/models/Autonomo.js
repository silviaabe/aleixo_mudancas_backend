import mongoose from "mongoose";

const autonomoSchema = new mongoose.Schema({
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

const Autonomo = mongoose.model("Autonomo", autonomoSchema);
export default Autonomo;
