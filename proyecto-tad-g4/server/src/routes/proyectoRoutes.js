const express = require('express');
const router = express.Router();
const proyectoControllers = require('../controllers/proyectoControllers');
const auth = require('../middleware/auth');

// Rutas para operaciones CRUD de Proyectos
router.get('/', proyectoControllers.getAllProyectos);
router.get('/:id', proyectoControllers.getProyectoById);
router.get('/mis-proyectos/:usuarioId', auth, proyectoControllers.getProyectosByUsuario); //obtener proyectos por usuario
router.post('/', auth, proyectoControllers.createProyecto);
router.put('/:id', auth, proyectoControllers.updateProyecto);
router.delete('/:id', auth, proyectoControllers.deleteProyecto);


module.exports = router;
