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
