import { Router } from 'express';
import { getAll, save }from '../controllers/carts.controller.js';

const router = Router();

//esta capa tiene como responsabilidad: definir el endpoint o servicio(verbo http, ruta, middlewares y el llamado a la capa inferior(controllers))

router.get('/', getAll);
router.post('/', save);

export default router;