// routes/usuarios.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.listarUsuarios);
router.get('/:id', usuarioController.obtenerUsuario);
router.post('/login', usuarioController.login);
// ... otras rutas de usuario ...

module.exports = router;
