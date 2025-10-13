import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import adminRoutes from "./src/routes/AdminRoute";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/admins", adminRoutes);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(" Conectado ao MongoDB");

    app.listen(PORT, () => console.log(` Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.log("Erro ao conectar ao MongoDB:", error);
  }
};

connectDB();
