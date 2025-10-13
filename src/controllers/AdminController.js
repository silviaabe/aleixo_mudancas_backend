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
