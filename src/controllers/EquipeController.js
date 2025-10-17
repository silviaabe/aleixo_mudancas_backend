import Equipe from "../models/Equipe.js";

export const cadastrarEquipe = async (req, res) => {
  try {
    const equipe = new Equipe(req.body);
    const equipeCadastrada = await equipe.save();
    res.status(201).json(equipeCadastrada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarEquipes = async (req, res) => {
  try {
    const equipes = await Equipe.find();
    res.json(equipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarEquipe = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const equipeExistente = await Equipe.findById(id);
    if (!equipeExistente) {
      return res.status(404).json({ message: error.message });
    }

    if (
      dadosAtualizados.nome &&
      dadosAtualizados.nome !== equipeExistente.nome
    ) {
      const nomeExistente = await Equipe.findOne({
        nome: dadosAtualizados.nome,
        _id: { $ne: id },
      });
      if (nomeExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    const equipeAtualizada = await Equipe.findByIdAndUpdate(
      id,
      { $set: dadosAtualizados },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(equipeAtualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarEquipePorId = async (req, res) => {
  try {
    const { id } = req.params;
    const equipe = await Equipe.findById(id);
    res.json(equipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarEquipe = async (req, res) => {
  try {
    const { id } = req.params;

    const EquipeInativa = await Equipe.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    );

    res.json(EquipeInativa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarEquipe = async (req, res) => {
  try {
    const { id } = req.params;

    const equipeReativada = await Equipe.findByIdAndUpdate(
      id,
      { status: "ativo" },
      { new: true }
    );

    res.json(equipeReativada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
