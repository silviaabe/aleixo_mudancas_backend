import Autonomo from "../models/Autonomo.js";

export const cadastrarAutonomo = async (req, res) => {
  try {
    const autonomo = new Autonomo(req.body);
    const autonomoCadastrado = await autonomo.save();
    res.status(201).json(autonomoCadastrado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarAutonomos = async (req, res) => {
  try {
    const autonomos = await Autonomo.find();
    res.json(autonomos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarAutonomo = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const autonomoExistente = await Autonomo.findById(id);
    if (!autonomoExistente) {
      return res.status(404).json({ message: error.message });
    }

    if (
      dadosAtualizados.nome &&
      dadosAtualizados.nome !== autonomoExistente.nome
    ) {
      const nomeExistente = await Autonomo.findOne({
        nome: dadosAtualizados.nome,
        _id: { $ne: id },
      });
      if (nomeExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    if (
      dadosAtualizados.email &&
      dadosAtualizados.email !== autonomoExistente.email
    ) {
      const emailExistente = await Autonomo.findOne({
        email: dadosAtualizados.email,
        _id: { $ne: id },
      });
      if (emailExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    const autonomoAtualizado = await Autonomo.findByIdAndUpdate(
      id,
      { $set: dadosAtualizados },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(autonomoAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarAutonomoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const autonomo = await Autonomo.findById(id);
    res.json(autonomo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarAutonomo = async (req, res) => {
  try {
    const { id } = req.params;

    const autonomoinativado = await Autonomo.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    );

    res.json(autonomoinativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarAutonomo = async (req, res) => {
  try {
    const { id } = req.params;

    const autonomoReativado = await Autonomo.findByIdAndUpdate(
      id,
      { status: "ativo" },
      { new: true }
    );

    res.json(autonomoReativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
