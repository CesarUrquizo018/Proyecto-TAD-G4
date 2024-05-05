const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario'); // Importando Usuario

class Anotaciones extends Model {}

Anotaciones.init({
    id_anotaciones: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ContenidoAnotacion: DataTypes.TEXT,
    id_usuario: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Anotaciones',
    tableName: 'anotaciones',
    timestamps: false
});

Anotaciones.belongsTo(Usuario, { foreignKey: 'id_usuario' }); // Estableciendo relación

module.exports = Anotaciones;
