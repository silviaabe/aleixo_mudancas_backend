import Data from "../models/Data.js";

export const cadastrarData = async (req, res) => {
  try {
    const data = new Data(req.body);
    const dataCadastrada = await data.save();
    await dataCadastrada.populate("autonomo");
    res.status(201).json(dataCadastrada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarDatas = async (req, res) => {
  try {
    const datas = await Data.find().populate("autonomo");
    res.json(datas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarData = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const dataAtualizada = await Data.findByIdAndUpdate(id, dadosAtualizados, {
      new: true,
      runValidators: true,
    }).populate("autonomo");

    res.json(dataAtualizada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarDataPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Data.findById(id).populate("autonomo");
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarData = async (req, res) => {
  try {
    const { id } = req.params;

    const DataInativa = await Data.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    );

    res.json(DataInativa).populate("autonomo");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarData = async (req, res) => {
  try {
    const { id } = req.params;

    const dataReativada = await Data.findByIdAndUpdate(
      id,
      { status: "ativo" },
      { new: true }
    );

    res.json(dataReativada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
