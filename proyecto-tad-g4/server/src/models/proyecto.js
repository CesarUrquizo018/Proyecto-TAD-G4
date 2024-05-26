const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Fuentes = require('./fuentes');
const Anotaciones = require('./anotaciones');
const Otros = require('./otros');

class Proyecto extends Model {}

Proyecto.init({
    id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: DataTypes.STRING(100),
    descripcion: DataTypes.TEXT,
    fecha_creacion: DataTypes.DATEONLY,
    ciclo: DataTypes.INTEGER,
    curso: DataTypes.STRING(120),
    id_usuario: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Proyecto',
    tableName: 'proyecto',
    timestamps: false
});

Proyecto.belongsTo(Usuario, { foreignKey: 'id_usuario' });
//Proyecto.hasMany(Fuentes, { foreignKey: 'id_proyecto' });
//Proyecto.hasMany(Anotaciones, { foreignKey: 'id_proyecto' });
//Proyecto.hasMany(Otros, { foreignKey: 'id_proyecto' });

module.exports = Proyecto;
