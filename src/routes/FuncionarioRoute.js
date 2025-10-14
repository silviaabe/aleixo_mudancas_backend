import express from "express";
import {
  cadastrarFuncionario,
  listarFuncionarios,
} from "../controllers/funcionarioController.js";

const router = express.Router();

router.post("/", cadastrarFuncionario);
router.get("/", listarFuncionarios);

export default router;
