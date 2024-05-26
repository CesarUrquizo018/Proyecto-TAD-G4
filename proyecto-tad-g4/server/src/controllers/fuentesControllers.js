// src/controllers/fuentesController.js

const Fuentes = require('../models/fuentes');

const fuentesController = {

    getAllFuentes: async (req, res) => {
        try {
            const fuentes = await Fuentes.findAll();
            res.json(fuentes);
        } catch (error) {
            console.error('Error al obtener fuentes:', error);
            res.status(500).send({ message: 'Error al obtener fuentes' });
        }
    },

    getFuenteById: async (req, res) => {
        try {
            const fuente = await Fuentes.findByPk(req.params.id);
            if (fuente) {
                res.json(fuente);
            } else {
                res.status(404).send({ message: 'Fuente no encontrada' });
            }
        } catch (error) {
            console.error('Error al obtener la fuente:', error);
            res.status(500).send({ message: 'Error al obtener la fuente' });
        }
    },

    createFuente: async (req, res) => {
        try {
            const fuente = await Fuentes.create(req.body);
            res.status(201).json(fuente);
        } catch (error) {
            console.error('Error al crear la fuente:', error);
            res.status(500).send({ message: 'Error al crear la fuente' });
        }
    },

    updateFuente: async (req, res) => {
        try {
            const fuente = await Fuentes.findByPk(req.params.id);
            if (fuente) {
                await fuente.update(req.body);
                res.json(fuente);
            } else {
                res.status(404).send({ message: 'Fuente no encontrada' });
            }
        } catch (error) {
            console.error('Error al actualizar la fuente:', error);
            res.status(500).send({ message: 'Error al actualizar la fuente' });
        }
    },

    deleteFuente: async (req, res) => {
        try {
            const result = await Fuentes.destroy({
                where: { id_fuentes: req.params.id }
            });
            if (result) {
                res.send({ message: 'Fuente eliminada' });
            } else {
                res.status(404).send({ message: 'Fuente no encontrada' });
            }
        } catch (error) {
            console.error('Error al eliminar la fuente:', error);
            res.status(500).send({ message: 'Error al eliminar la fuente' });
        }
    },

    //obtener fuentes segun el id del proyecto
    getFuentesByProyectoId: async (req, res) => {
        try {
            const fuentes = await Fuentes.findAll({
                where: { id_proyecto: req.params.id_proyecto }
            });
            res.json(fuentes);
        } catch (error) {
            console.error('Error al obtener las fuentes:', error);
            res.status(500).send({ message: 'Error al obtener las fuentes' });
        }
    }
};

module.exports = fuentesController;
