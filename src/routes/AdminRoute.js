import express from "express";
import {
  buscarAdminPorId,
  cadastrarAdmin,
  deletarAdmin,
  editarAdmin,
  inativarAdmin,
  listarAdmins,
  reativarAdmin,
} from "../controllers/AdminController.js";

const router = express.Router();

router.post("/", cadastrarAdmin);
router.get("/", listarAdmins);
router.patch("/:id/inativar", inativarAdmin);
router.patch("/:id/reativar", reativarAdmin);
router.get("/:id", buscarAdminPorId);
router.put("/:id", editarAdmin);
router.delete("/:id", deletarAdmin);

export default router;
