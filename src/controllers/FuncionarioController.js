import Funcionario from "../models/Funcionario.js";

export const cadastrarFuncionario = async (req, res) => {
  try {
    const funcionario = new Funcionario(req.body);
    const funcionarioCadastrado = await funcionario.save();
    await funcionarioCadastrado.populate("equipe");
    res.status(201).json(funcionarioCadastrado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarFuncionarios = async (req, res) => {
  try {
    const funcionarios = await Funcionario.find().populate("equipe");
    res.json(funcionarios);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarFuncionario = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const funcionarioExistente = await Funcionario.findById(id);
    if (!funcionarioExistente) {
      return res.status(404).json({ message: "Funcionário não encontrado" });
    }

    if (
      dadosAtualizados.nome &&
      dadosAtualizados.nome !== funcionarioExistente.nome
    ) {
      const nomeExistente = await Funcionario.findOne({
        nome: dadosAtualizados.nome,
        _id: { $ne: id },
      });
      if (nomeExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    if (
      dadosAtualizados.email &&
      dadosAtualizados.email !== funcionarioExistente.email
    ) {
      const emailExistente = await Funcionario.findOne({
        email: dadosAtualizados.email,
        _id: { $ne: id },
      });
      if (emailExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    const funcionarioAtualizado = await Funcionario.findByIdAndUpdate(
      id,
      { $set: dadosAtualizados },
      {
        new: true,
        runValidators: true,
      }
    ).populate("equipe");

    res.json(funcionarioAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarFuncionarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const funcionario = await Funcionario.findById(id).populate("equipe");
    res.json(funcionario);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarFuncionario = async (req, res) => {
  try {
    const { id } = req.params;

    const funcionarioinativado = await Funcionario.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    ).populate("equipe");

    res.json(funcionarioinativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarFuncionario = async (req, res) => {
  try {
    const { id } = req.params;

    const funcionarioReativo = await Funcionario.findByIdAndUpdate(
      id,
      { status: "ativo" },
      { new: true }
    ).populate("equipe");

    res.json(funcionarioReativo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
