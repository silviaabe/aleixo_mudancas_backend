import Admin from "../models/Admin.js";

export const cadastrarAdmin = async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const adminCadastrado = await admin.save();
    res.status(201).json(adminCadastrado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const listarAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.json(admins);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const editarAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const dadosAtualizados = req.body;

    const adminExistente = await Admin.findById(id);
    if (!adminExistente) {
      return res.status(404).json({ message: error.message });
    }

    if (
      dadosAtualizados.nome &&
      dadosAtualizados.nome !== adminExistente.nome
    ) {
      const nomeExistente = await Admin.findOne({
        nome: dadosAtualizados.nome,
        _id: { $ne: id },
      });
      if (nomeExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    if (
      dadosAtualizados.email &&
      dadosAtualizados.email !== adminExistente.email
    ) {
      const emailExistente = await Admin.findOne({
        email: dadosAtualizados.email,
        _id: { $ne: id },
      });
      if (emailExistente) {
        return res.status(400).json({ message: error.message });
      }
    }

    const adminAtualizado = await Admin.findByIdAndUpdate(
      id,
      { $set: dadosAtualizados },
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(adminAtualizado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const buscarAdminPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const inativarAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const admininativado = await Admin.findByIdAndUpdate(
      id,
      { status: "inativado" },
      {
        new: true,
      }
    );

    res.json(admininativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const reativarAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const adminReativado = await Admin.findByIdAndUpdate(
      id,
      { status: "ativado" },
      { new: true }
    );

    res.json(adminReativado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
