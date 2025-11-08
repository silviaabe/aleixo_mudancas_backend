import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  data_embalagem: {
    type: String,
    required: false,
  },

  data_retirada: {
    type: String,
    required: true,
  },

  data_entrega: {
    type: String,
    required: true,
  },

  equipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipe",
    required: false,
  },

  funcionario: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Funcionario",
      required: false,
    },
  ],

  autonomo: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Autonomo",
      required: false,
    },
  ],

  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Veiculo",
    required: true,
  },

  descricao: {
    type: String,
    required: false,
  },

  status: {
    type: String,
    enum: ["em-andamento", "inativado"],
    default: "em-andamento",
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
