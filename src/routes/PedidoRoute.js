import express from "express";
import {
  cadastrarPedido,
  listarPedidos,
  editarPedido,
  finalizarPedido,
  buscarPedidoPorId,
  reativarPedido,
} from "../controllers/PedidoController.js";

const router = express.Router();

router.post("/", cadastrarPedido);
router.get("/", listarPedidos);
router.patch("/:id/inativar", finalizarPedido);
router.patch("/:id/reativar", reativarPedido);
router.get("/:id", buscarPedidoPorId);
router.put("/:id", editarPedido);

export default router;
