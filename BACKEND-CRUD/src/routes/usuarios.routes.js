import { Router } from 'express';
import { verUsuarios, verUsuarioUnico, crearUsuario, actualizarUsuario, eliminarUsuario } from '../controllers/usuarios.controllers.js';

const router = Router();

router.get("/usuarios", verUsuarios);
router.get("/usuarios/:id", verUsuarioUnico);
router.post("/usuarios", crearUsuario);
router.put("/usuarios/:id", actualizarUsuario);
router.delete("/usuarios/:id", eliminarUsuario);

export default router;