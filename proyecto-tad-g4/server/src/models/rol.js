// rol.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Rol extends Model {}

Rol.init({
  id_rol: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre_rol: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Rol',
  tableName: 'rol',
  timestamps: false
});

module.exports = Rol;