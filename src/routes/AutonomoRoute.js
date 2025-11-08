import express from "express";
import {
  buscarAutonomoPorId,
  cadastrarAutonomo,
  deletarAutonomo,
  editarAutonomo,
  inativarAutonomo,
  listarAutonomos,
  reativarAutonomo,
} from "../controllers/AutonomoController.js";

const router = express.Router();

router.post("/", cadastrarAutonomo);
router.get("/", listarAutonomos);
router.patch("/:id/inativar", inativarAutonomo);
router.patch("/:id/reativar", reativarAutonomo);
router.get("/:id", buscarAutonomoPorId);
router.put("/:id", editarAutonomo);
router.delete("/:id", deletarAutonomo);

export default router;
