import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
  data: {
    type: String,
    required: true,
  },
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
