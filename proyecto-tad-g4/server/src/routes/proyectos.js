const express = require('express');
const router = express.Router();
const { Proyecto } = require('../models'); // Asegúrate de que la ruta sea correcta

// Obtener todos los proyectos
router.get('/', async (req, res) => {
  try {
    const proyectos = await Proyecto.findAll();
    res.json(proyectos);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// Obtener un proyecto por su ID
router.get('/:id', async (req, res) => {
  try {
    const proyecto = await Proyecto.findByPk(req.params.id);
    if (proyecto) {
      res.json(proyecto);
    } else {
      res.status(404).send('Proyecto no encontrado');
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
