import { Router } from "express";
import { getServicios} from "../controllers/servicio.controller";

const router = Router();

router.get('/',getServicios);

export default router;