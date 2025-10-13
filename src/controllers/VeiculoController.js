import Veiculo from "../models/Veiculo.js";

export const cadastarVeiculo = async (req, res) => {
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
