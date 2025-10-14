import express from "express";
import {
  cadastrarPedido,
  listarPedidos,
} from "../controllers/PedidoController.js";

const router = express.Router();

router.post("/", cadastrarPedido);
router.get("/", listarPedidos);

export default router;
