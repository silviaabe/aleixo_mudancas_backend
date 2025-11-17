import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./src/routes/AdminRoute.js";
import autonomoRoutes from "./src/routes/AutonomoRoute.js";
import dadosAutonomoRoutes from "./src/routes/DadosAutonomoRoute.js";
import dadosFuncionarioRoutes from "./src/routes/DadosFuncionarioRoute.js";
import equipeRoutes from "./src/routes/EquipeRoute.js";
import funcionarioRoutes from "./src/routes/FuncionarioRoute.js";
import veiculoRoutes from "./src/routes/VeiculoRoute.js";
import pedidosRoutes from "./src/routes/PedidoRoute.js";

dotenv.config();

const app = express();

import Admin from "./src/models/adminModel.js";
app.get("/setup-demo", async (req, res) => {
  try {
    const email = "demo@demo.com";
    const existing = await Admin.findOne({ email });
    if (existing) return res.status(200).send("Usuário demo já existe");

    const demo = new Admin({
      nome: "Demo Admin",
      email: "demo@demo.com",
      senha: "demo123",
      status: "ativo" 
    });

    await demo.save();
    res.send("Usuário demo criado: demo@demo.com / demo123");
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao criar usuário demo");
  }
});
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api/admins", adminRoutes);
app.use("/api/autonomos", autonomoRoutes);
app.use("/api/dados-autonomo", dadosAutonomoRoutes);
app.use("/api/dados-funcionario", dadosFuncionarioRoutes);
app.use("/api/equipes", equipeRoutes);
app.use("/api/funcionarios", funcionarioRoutes);
app.use("/api/pedidos", pedidosRoutes);
app.use("/api/veiculos", veiculoRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    console.log(" Conectado ao MongoDB");

    app.listen(PORT, () => console.log(` Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
  }
};

connectDB();
