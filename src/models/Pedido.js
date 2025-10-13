import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
  data_entrega: {
    type: Date,
    required: true,
  },
  data_retirada: {
    type: Date,
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
    required: true,
  },
});

const Pedido = mongoose.model("Pedido", pedidoSchema);
export default Pedido;
