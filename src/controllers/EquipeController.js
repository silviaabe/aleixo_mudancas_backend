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
