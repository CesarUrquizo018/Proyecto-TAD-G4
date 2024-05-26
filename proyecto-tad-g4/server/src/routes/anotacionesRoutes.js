// src/routes/anotacionesRoutes.js
const express = require('express');
const router = express.Router();
const anotacionesControllers = require('../controllers/anotacionesControllers');

router.get('/', anotacionesControllers.getAllAnotaciones);
router.get('/:id', anotacionesControllers.getAnotacionById);
router.post('/', anotacionesControllers.createAnotacion);
router.put('/:id', anotacionesControllers.updateAnotacion);
router.delete('/:id', anotacionesControllers.deleteAnotacion);
router.get('/proyecto/:id_proyecto', anotacionesControllers.getAnotacionesByProyectoId);

module.exports = router;
