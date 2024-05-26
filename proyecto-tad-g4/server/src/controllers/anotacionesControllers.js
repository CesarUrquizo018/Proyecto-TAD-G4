// src/controllers/anotacionesController.js

const Anotaciones = require('../models/anotaciones');

const anotacionesController = {
    getAllAnotaciones: async (req, res) => {
        try {
            const anotaciones = await Anotaciones.findAll();
            res.json(anotaciones);
        } catch (error) {
            console.error('Error al obtener anotaciones:', error);
            res.status(500).send({ message: 'Error al obtener anotaciones' });
        }
    },

    getAnotacionById: async (req, res) => {
        try {
            const anotacion = await Anotaciones.findByPk(req.params.id);
            if (anotacion) {
                res.json(anotacion);
            } else {
                res.status(404).send({ message: 'Anotación no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la anotación:', error);
            res.status(500).send({ message: 'Error al obtener la anotación' });
        }
    },

    createAnotacion: async (req, res) => {
        try {
            const anotacion = await Anotaciones.create(req.body);
            res.status(201).json(anotacion);
        } catch (error) {
            console.error('Error al crear la anotación:', error);
            res.status(500).send({ message: 'Error al crear la anotación' });
        }
    },

    updateAnotacion: async (req, res) => {
        try {
            const anotacion = await Anotaciones.findByPk(req.params.id);
            if (anotacion) {
                await anotacion.update(req.body);
                res.json(anotacion);
            } else {
                res.status(404).send({ message: 'Anotación no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la anotación:', error);
            res.status(500).send({ message: 'Error al actualizar la anotación' });
        }
    },

    deleteAnotacion: async (req, res) => {
        try {
            const result = await Anotaciones.destroy({
                where: { id_anotaciones: req.params.id }
            });
            if (result) {
                res.send({ message: 'Anotación eliminada' });
            } else {
                res.status(404).send({ message: 'Anotación no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la anotación:', error);
            res.status(500).send({ message: 'Error al eliminar la anotación' });
        }
    },

    getAnotacionesByProyectoId: async (req, res) => {
        try {
            const anotaciones = await Anotaciones.findAll({
                where: { id_proyecto: req.params.id_proyecto }
            });
            res.json(anotaciones);
        } catch (error) {
            console.error('Error al obtener las anotaciones:', error);
            res.status(500).send({ message: 'Error al obtener las anotaciones' });
        }
    }
};

module.exports = anotacionesController;
