import express from "express";
import {
  cadastrarDadosAutonomo,
  buscarDadosAutonomoPorId,
  listarDadosAutonomo,
  editarDadosAutonomo,
  deletarDadosAutonomo,
} from "../controllers/DadosAutonomoController.js";

const router = express.Router();

router.post("/", cadastrarDadosAutonomo);
router.get("/", listarDadosAutonomo);
router.get("/:id", buscarDadosAutonomoPorId);
router.put("/:id", editarDadosAutonomo);
router.delete("/:id", deletarDadosAutonomo);

export default router;
