import Veiculo from "../models/Veiculo.js";

export const cadastrarVeiculo = async (req, res) => {
  try {
    const veiculo = new Veiculo(req.body);
    const veiculoCadastrado = await veiculo.save();
    res.status(201).json(veiculoCadastrado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarVeiculos = async (req, res) => {
  try {
    const veiculos = await Veiculo.find();
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarVeiculo = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const veiculoExistente = await Veiculo.findById(id);
    if (!veiculoExistente) {
      return res.status(404).json({ message: error.message });
    }

    if (
      dadosAtualizados.placa &&
      dadosAtualizados.placa !== veiculoExistente.placa
    ) {
      const placaExistente = await Veiculo.findOne({
        placa: dadosAtualizados.placa,
        _id: { $ne: id },
      });
      if (placaExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    const veiculoAtualizado = await Veiculo.findByIdAndUpdate(
      id,
      { $set: dadosAtualizados },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(veiculoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarVeiculoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const veiculo = await Veiculo.findById(id);
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarVeiculo = async (req, res) => {
  try {
    const { id } = req.params;

    const veiculoinativado = await Veiculo.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    );

    res.json(veiculoinativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarVeiculo = async (req, res) => {
  try {
    const { id } = req.params;

    const veiculoReativado = await Veiculo.findByIdAndUpdate(
      id,
      { status: "ativo" },
      { new: true }
    );

    res.json(veiculoReativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletarVeiculo = async (req, res) => {
  try {
    const { id } = req.params;

    const dadosExistentes = await Veiculo.findById(id);
    if (!dadosExistentes) {
      return res.status(404).json({ message: "Dados não encontrados" });
    }

    await Veiculo.findByIdAndDelete(id);

    res.json({ message: "Veículo deletado permanentemente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
