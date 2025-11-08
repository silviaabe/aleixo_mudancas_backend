import express from "express";
import {
  cadastrarFuncionario,
  listarFuncionarios,
  inativarFuncionario,
  reativarFuncionario,
  editarFuncionario,
  buscarFuncionarioPorId,
  deletarFuncionario,
} from "../controllers/FuncionarioController.js";

const router = express.Router();

router.post("/", cadastrarFuncionario);
router.get("/", listarFuncionarios);
router.patch("/:id/inativar", inativarFuncionario);
router.patch("/:id/reativar", reativarFuncionario);
router.get("/:id", buscarFuncionarioPorId);
router.put("/:id", editarFuncionario);
router.delete("/:id", deletarFuncionario);

export default router;
