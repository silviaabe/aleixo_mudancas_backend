import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },

  diaria: {
    type: String,
    required: true,
  },

  autonomo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Autonomo",
    required: true,
  },

  pernoite: {
    type: Boolean,
    required: true,
  },

  extra: {
    type: Boolean,
    required: true,
  },

  status: {
    type: String,
    enum: ["ativo", "inativado"],
    default: "ativo",
  },
});

const Data = mongoose.model("Data", dataSchema);
export default Data;
