import express from "express";
import FuncionarioController from "../controllers/funcionarios.controller.js";
const router = express.Router();

router.post("/cadastrar", FuncionarioController.cadastrar);
router.get("/listar", FuncionarioController.listarTodos);
router.get("/buscar/:matricula", FuncionarioController.buscarPorMatricula);
router.put("/atualizar/:matricula", FuncionarioController.atualizarTotal);
router.patch("/atualizar-parcial/:matricula", FuncionarioController.atualizarParcial);
router.delete("/deletar/:matricula", FuncionarioController.deletarPorMatricula);
router.delete("/deletar-todos", FuncionarioController.deletarTodos);
export default router;