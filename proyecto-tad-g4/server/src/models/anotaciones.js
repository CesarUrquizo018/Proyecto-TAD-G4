// anotaciones.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Anotaciones extends Model {}

Anotaciones.init({
  id_anotaciones: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  ContenidoAnotacion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  id_proyecto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Anotaciones',
  tableName: 'anotaciones',
  timestamps: false
});

module.exports = Anotaciones;