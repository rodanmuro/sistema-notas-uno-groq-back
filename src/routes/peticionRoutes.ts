import { Request, Response, Router } from 'express';
import { PeticionController } from '../controllers/peticionController';
import { AsignaturaController } from '../controllers/asignaturaController';
import UsuarioController from '../controllers/usuarioController';

export const router = Router();

const peticionController = new PeticionController();
const asignaturaController = new AsignaturaController();
const usuarioController = new UsuarioController();

router.get("/peticion", (req: Request, res: Response) => {
    peticionController.peticionController(req, res);
})

router.get("/asignatura", (req: Request, res: Response) => {
    asignaturaController.getAll(req, res);
})

router.get("/usuario/profesor", (req:Request, res:Response) => {
  usuarioController.getProfesores(req, res);
})

