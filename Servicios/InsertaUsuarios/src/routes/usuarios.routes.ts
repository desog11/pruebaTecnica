import express, { Router } from "express";
import { insertaUsuarios } from "../controllers/usuarios.controller";

const router = Router();

router.post('/',express.urlencoded({ extended: true }),insertaUsuarios);

export default router;