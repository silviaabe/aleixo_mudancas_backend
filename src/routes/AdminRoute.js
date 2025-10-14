import express from "express";
import {
  cadastrarAdmin,
  listarAdmins,
} from "../controllers/AdminController.js";

const router = express.Router();

router.post("/", cadastrarAdmin);
router.get("/", listarAdmins);

export default router;
