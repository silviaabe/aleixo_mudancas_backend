import express from "express";
import {
  cadastrarVeiculo,
  listarVeiculos,
} from "../controllers/veiculoController.js";

const router = express.Router();

router.post("/", cadastrarVeiculo);
router.get("/", listarVeiculos);

export default router;
