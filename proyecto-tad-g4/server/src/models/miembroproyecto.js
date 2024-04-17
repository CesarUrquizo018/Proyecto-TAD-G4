// miembrosproyecto.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class MiembrosProyecto extends Model {}

MiembrosProyecto.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_proyecto: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'MiembrosProyecto',
  tableName: 'miembrosproyecto',
  timestamps: false
});

module.exports = MiembrosProyecto;
