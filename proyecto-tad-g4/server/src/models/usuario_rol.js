// usuario_rol.js

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class UsuarioRol extends Model {}

UsuarioRol.init({
  id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  id_rol: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'UsuarioRol',
  tableName: 'usuario_rol',
  timestamps: false
});

module.exports = UsuarioRol;