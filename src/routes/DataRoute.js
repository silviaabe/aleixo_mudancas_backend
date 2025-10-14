import express from "express";
import { cadastrarData, listarDatas } from "../controllers/dataController.js";

const router = express.Router();

router.post("/", cadastrarData);
router.get("/", listarDatas);

export default router;
