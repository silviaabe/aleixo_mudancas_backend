import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },

  status: {
    type: String,
    enum: ["ativo", "inativado"],
    default: "ativo",
  },
});

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
