// proyecto.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Asegúrate de que la ruta sea correcta

class Proyecto extends Model {}

Proyecto.init({
  id_proyecto: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  ciclo: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  curso: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Proyecto',
  tableName: 'proyecto',
  timestamps: false
});

module.exports =  Proyecto;
