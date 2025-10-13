import Data from "../models/Data.js";

export const CadastrarData = async (req, res) => {
  try {
    const data = new Data(req.body);
    const dataCadastrada = await data.save();
    await dataSalva.populate("autonomo");
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
