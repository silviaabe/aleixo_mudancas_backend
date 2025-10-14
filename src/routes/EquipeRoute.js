import express from "express";
import {
  cadastrarEquipe,
  listarEquipes,
} from "../controllers/EquipeController.js";

const router = express.Router();

router.post("/", cadastrarEquipe);
router.get("/", listarEquipes);

export default router;
