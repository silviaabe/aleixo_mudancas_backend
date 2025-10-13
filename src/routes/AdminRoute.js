import express from "express";
import { criarAdmin, listarAdmins } from "../controllers/AdminController";

const router = express.Router();

router.post("/", criarAdmin);

router.get("/", listarAdmins);

export default router;
