// fuentes.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la ruta sea correcta

class Fuentes extends Model {}

Fuentes.init({
  id_fuentes: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  NombrFuente: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  URLFuente: {
    type: DataTypes.STRING(255),
    allowNull: true // Cambia a false si la columna no debe ser nula
  },
  FechaPublicacion: {
    type: DataTypes.DATE,
    allowNull: true // Cambia a false si la columna no debe ser nula
  },
  id_proyecto: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Fuentes',
  tableName: 'fuentes',
  timestamps: false
});

module.exports = Fuentes;