import mongoose from "mongoose";

const dadosAutonomoSchema = new mongoose.Schema({
  autonomo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autonomo",
    required: true,
  },

  diaria: {
    type: Boolean,
    required: false,
  },

  data_diaria: {
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

const DadosAutonomo = mongoose.model("DataAutonomo", dadosAutonomoSchema);
export default DadosAutonomo;
