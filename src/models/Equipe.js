import mongoose from "mongoose";

const equipeSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
});

const Equipe = mongoose.model("Equipe", equipeSchema);
export default Equipe;
