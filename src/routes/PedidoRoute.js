import express from "express";
import {
  cadastrarPedido,
  listarPedidos,
  editarPedido,
  inativarPedido,
  buscarPedidoPorId,
  reativarPedido,
  deletarPedido,
} from "../controllers/PedidoController.js";

const router = express.Router();

router.post("/", cadastrarPedido);
router.get("/", listarPedidos);
router.patch("/:id/inativar", inativarPedido);
router.patch("/:id/reativar", reativarPedido);
router.get("/:id", buscarPedidoPorId);
router.put("/:id", editarPedido);
router.delete("/:id", deletarPedido);

export default router;
