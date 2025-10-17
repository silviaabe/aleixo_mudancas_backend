import express from "express";
import {
  buscarDataPorId,
  cadastrarData,
  editarData,
  inativarData,
  listarDatas,
  reativarData,
} from "../controllers/DataController.js";

const router = express.Router();

router.post("/", cadastrarData);
router.get("/", listarDatas);
router.patch("/:id/inativar", inativarData);
router.patch("/:id/reativar", reativarData);
router.get("/:id", buscarDataPorId);
router.put("/:id", editarData);

export default router;
