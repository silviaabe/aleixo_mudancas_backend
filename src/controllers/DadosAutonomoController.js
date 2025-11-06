import DadosAutonomo from "../models/DadosAutonomo.js";

export const cadastrarDadosAutonomo = async (req, res) => {
  try {
    const dados = new DadosAutonomo(req.body);
    const dadosCadastrados = await dados.save();
    await dados.populate("autonomo");
    res.status(201).json(dadosCadastrados);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarDadosAutonomo = async (req, res) => {
  try {
    const dados = await DadosAutonomo.find().populate("autonomo");
    res.json(dados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarDadosAutonomo = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const editarDados = await DadosAutonomo.findByIdAndUpdate(
      id,
      dadosAtualizados,
      {
        new: true,
        runValidators: true,
      }
    ).populate("autonomo");

    res.json(editarDados);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarDadosAutonomoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = await DadosAutonomo.findById(id).populate("autonomo");
    res.json(dados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletarDadosAutonomo = async (req, res) => {
  try {
    const { id } = req.params;

    const dadosExistentes = await DadosAutonomo.findById(id);
    if (!dadosExistentes) {
      return res.status(404).json({ message: "Dados não encontrados" });
    }

    await DadosAutonomo.findByIdAndDelete(id);

    res.json({ message: "Dados deletados permanentemente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
