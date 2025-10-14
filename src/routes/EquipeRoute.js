import express from "express";
import {
  cadastrarEquipe,
  listarEquipes,
} from "../controllers/equipeController.js";

const router = express.Router();

router.post("/", cadastrarEquipe);
router.get("/", listarEquipes);

export default router;
