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

export const editarPedido = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const pedidoExistente = await Pedido.findById(id);
    if (!pedidoExistente) {
      return res.status(404).json({ message: error.message });
    }

    if (
      dadosAtualizados.numeroPedido &&
      dadosAtualizados.numeroPedido !== pedidoExistente.numeroPedido
    ) {
      const numeroPedidoExistente = await Pedido.findOne({
        numeroPedido: dadosAtualizados.numeroPedido,
        _id: { $ne: id },
      });
      if (numeroPedidoExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    const pedidoAtualizado = await Pedido.findByIdAndUpdate(
      id,
      { $set: dadosAtualizados },
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("veiculo")
      .populate("equipe");

    res.json(pedidoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarPedidoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.findById(id)
      .populate("veiculo")
      .populate("equipe");
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarPedido = async (req, res) => {
  try {
    const { id } = req.params;

    const pedidoInativado = await Pedido.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    )
      .populate("veiculo")
      .populate("equipe");

    res.json(pedidoInativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarPedido = async (req, res) => {
  try {
    const { id } = req.params;

    const pedidoReaberto = await Pedido.findByIdAndUpdate(
      id,
      { status: "em-andamento" },
      { new: true }
    )
      .populate("veiculo")
      .populate("equipe");

    res.json(pedidoReaberto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletarPedido = async (req, res) => {
  try {
    const { id } = req.params;

    const pedidoExistente = await Pedido.findById(id);
    if (!pedidoExistente) {
      return res.status(404).json({ message: "Pedido não encontrado" });
    }

    await Pedido.findByIdAndDelete(id);

    res.json({ message: "Pedido deletado permanentemente com sucesso" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
