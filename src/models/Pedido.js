import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true,
  },

  data_entrega: {
    type: String,
    required: true,
  },
  data_retirada: {
    type: String,
    required: true,
  },
  equipe: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Equipe",
    required: true,
  },
  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Veiculo",
    required: true,
  },
  descricao: {
    type: String,
  },

  status: {
    type: String,
    enum: ["em-andamento", "inativado"],
    default: "em-andamento",
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
