import DadosFuncionario from "../models/DadosFuncionario.js";

export const cadastrarDadosFuncionario = async (req, res) => {
  try {
    const dados = new DadosFuncionario(req.body);
    const dadosCadastrados = await dados.save();
    await dadosCadastrados.populate("funcionario");
    res.status(201).json(dadosCadastrados);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarDadosFuncionario = async (req, res) => {
  try {
    const dados = await DadosFuncionario.find().populate("funcionario");
    res.json(dados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarDadosFuncionario = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;
    const editarDados = await DadosFuncionario.findByIdAndUpdate(
      id,
      dadosAtualizados,
      {
        new: true,
        runValidators: true,
      }
    ).populate("funcionario");

    res.json(editarDados);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarDadosFuncionarioPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = await DadosFuncionario.findById(id).populate("funcionario");
    res.json(dados);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deletarDadosFuncionario = async (req, res) => {
  try {
    const { id } = req.params;

    const dadosExistentes = await DadosFuncionario.findById(id);
    if (!dadosExistentes) {
      return res.status(404).json({ message: "Dados não encontrados" });
    }

    await DadosFuncionario.findByIdAndDelete(id);

    res.json({ message: "Dados deletados permanentemente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
