import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./src/routes/AdminRoute.js";
import autonomoRoutes from "./src/routes/AutonomRoute.js";
import dataRoutes from "./src/routes/DataRoute.js";
import equipeRoutes from "./src/routes/EquipeRoute.js";
import funcionarioRoutes from "./src/routes/FuncionarioRoute.js";
import veiculoRoutes from "./src/routes/VeiculoRoute.js";
import pedidosRoutes from "./src/routes/PedidoRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/admins", adminRoutes);
app.use("/api/autonomos", autonomoRoutes);
app.use("/api/data", dataRoutes);
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

app.get("/", (req, res) => {
  res.send("Servidor conectado ao MongoDB remoto!");
});

app.listen(PORT, () => console.log(`🚀 Servidor rodando na porta ${PORT}`));
