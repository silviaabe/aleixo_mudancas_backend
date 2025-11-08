import express from "express";
import {
  cadastrarVeiculo,
  listarVeiculos,
  inativarVeiculo,
  reativarVeiculo,
  buscarVeiculoPorId,
  editarVeiculo,
  deletarVeiculo,
} from "../controllers/VeiculoController.js";

const router = express.Router();

router.post("/", cadastrarVeiculo);
router.get("/", listarVeiculos);
router.patch("/:id/inativar", inativarVeiculo);
router.patch("/:id/reativar", reativarVeiculo);
router.get("/:id", buscarVeiculoPorId);
router.put("/:id", editarVeiculo);
router.delete("/:id", deletarVeiculo);

export default router;
