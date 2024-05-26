// src/routes/otrosRoutes.js
const express = require('express');
const router = express.Router();
const otrosControllers = require('../controllers/otrosControllers');

router.get('/', otrosControllers.getAllOtros);
router.get('/:id', otrosControllers.getOtroById);
router.post('/', otrosControllers.createOtro);
router.put('/:id', otrosControllers.updateOtro);
router.delete('/:id', otrosControllers.deleteOtro);
router.get('/proyecto/:id_proyecto', otrosControllers.getOtrosByProyectoId);

module.exports = router;
