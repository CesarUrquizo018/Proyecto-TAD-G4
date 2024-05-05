/*const express = require('express');
const router = express.Router();
const Proyecto = require('../models/proyecto');
const Usuario = require('../models/usuario'); // Si necesitas incluir información del usuario en las respuestas

// Endpoint para listar proyectos
router.get('/', async (req, res) => {
    try {
        const proyectos = await Proyecto.findAll({
            include: Usuario
        });
        res.json(proyectos);
    } catch (error) {
        console.error('Error al intentar listar los proyectos:', error);
        res.status(500).send({ message: 'Error al obtener los proyectos' });
    }
});

module.exports = router;
*/

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

