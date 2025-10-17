import express from "express";
import {
  buscarEquipePorId,
  cadastrarEquipe,
  editarEquipe,
  inativarEquipe,
  listarEquipes,
  reativarEquipe,
} from "../controllers/EquipeController.js";

const router = express.Router();

router.post("/", cadastrarEquipe);
router.get("/", listarEquipes);
router.patch("/:id/inativar", inativarEquipe);
router.patch("/:id/reativar", reativarEquipe);
router.get("/:id", buscarEquipePorId);
router.put("/:id", editarEquipe);

export default router;
