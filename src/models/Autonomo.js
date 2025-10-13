import mongoose from "mongoose";

const autonomoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
});

const Autonomo = mongoose.model("Autonomo", autonomoSchema);
export default Autonomo;
