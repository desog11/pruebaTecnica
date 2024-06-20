import express, { Router } from "express";
import { insProds} from "../controllers/insProds.controller";

const router = Router();

router.post('/',express.urlencoded({ extended: true }),insProds);

export default router;