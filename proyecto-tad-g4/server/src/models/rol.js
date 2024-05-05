const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Rol extends Model {}

Rol.init({
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre_rol: DataTypes.STRING(255)
}, {
    sequelize,
    modelName: 'Rol',
    tableName: 'rol',
    timestamps: false
});

module.exports = Rol;
