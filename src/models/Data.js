import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  hora: {
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
});

const Data = mongoose.model("Data", dataSchema);
export default Data;
