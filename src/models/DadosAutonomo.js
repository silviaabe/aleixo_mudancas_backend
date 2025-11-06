import mongoose from "mongoose";

const dadosAutonomoSchema = new mongoose.Schema({
  autonomo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autonomo",
    required: true,
  },

  diaria: {
    type: Boolean,
    required: true,
  },

  dataDiaria: {
    type: String,
    required: false,
  },
  escada: {
    type: Boolean,
    required: true,
  },

  dataEscada: {
    type: String,
    required: false,
  },
});

const DadosAutonomo = mongoose.model("DataAutonomo", dadosAutonomoSchema);
export default DadosAutonomo;
