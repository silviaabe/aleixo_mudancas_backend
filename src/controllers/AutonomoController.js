import Autonomo from "../models/Autonomo";

export const cadastarAutonomo = async (req, res) => {
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
