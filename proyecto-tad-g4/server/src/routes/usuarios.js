const express = require('express');
const router = express.Router();
const { Usuario } = require('../models'); // Asegúrate de que la ruta sea correcta

// Obtener todos los usuarios
router.get('/', async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
