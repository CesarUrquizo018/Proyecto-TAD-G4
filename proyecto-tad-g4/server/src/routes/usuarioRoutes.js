/*const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

// Endpoint para listar usuarios
router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error('Error al intentar listar los usuarios:', error);
        res.status(500).send({ message: 'Error al obtener los usuarios' });
    }
});

module.exports = router;
*/

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas para operaciones CRUD de Usuarios
router.get('/', usuarioController.getAllUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.post('/', usuarioController.createUsuario);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

module.exports = router;



