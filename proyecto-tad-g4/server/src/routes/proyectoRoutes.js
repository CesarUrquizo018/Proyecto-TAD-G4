const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Rutas para operaciones CRUD de Proyectos
router.get('/', proyectoController.getAllProyectos);
router.get('/:id', proyectoController.getProyectoById);
router.get('/mis-proyectos/:usuarioId', proyectoController.getProyectosByUsuario);
router.post('/', proyectoController.createProyecto);
router.put('/:id', proyectoController.updateProyecto);
router.delete('/:id', proyectoController.deleteProyecto);

module.exports = router;

