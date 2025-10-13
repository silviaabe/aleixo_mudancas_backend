import Pedido from "../models/Pedido.js";

export const cadastrarPedido = async (req, res) => {
  try {
    const pedido = new Pedido(req.body);
    const pedidoCadastrado = await pedido.save();
    await pedidoCadastrado.populate("equipe").populate("veiculo");
    res.status(201).json(pedidoCadastrado);
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
