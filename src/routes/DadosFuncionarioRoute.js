import express from "express";
import {
  cadastrarDadosFuncionario,
  listarDadosFuncionario,
  buscarDadosFuncionarioPorId,
  editarDadosFuncionario,
  deletarDadosFuncionario,
} from "../controllers/DadosFuncionarioController.js";

const router = express.Router();

router.post("/", cadastrarDadosFuncionario);
router.get("/", listarDadosFuncionario);
router.get("/:id", buscarDadosFuncionarioPorId);
router.put("/:id", editarDadosFuncionario);
router.delete("/:id", deletarDadosFuncionario);

export default router;
