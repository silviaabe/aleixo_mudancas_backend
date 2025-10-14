import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
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
});

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
