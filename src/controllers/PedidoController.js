import Pedido from "../models/Pedido.js";

export const cadastrarPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    const pedidoCadastrado = await pedido.save();
    const pedidoPopulado = await Pedido.findById(pedidoCadastrado._id)
      .populate("veiculo")
      .populate("equipe");
    res.status(201).json(pedidoPopulado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.find().populate("equipe").populate("veiculo");
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
