const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./proyecto'); // Importando Proyecto para la relación

class Otros extends Model {}

Otros.init({
    id_otros: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreOtro: DataTypes.STRING(255),
    DescripcionOtro: DataTypes.TEXT,
    id_proyecto: DataTypes.INTEGER  // Esta es la clave foránea que enlaza con Proyecto
}, {
    sequelize,
    modelName: 'Otros',
    tableName: 'otros',
    timestamps: false
});

// Estableciendo la relación con Proyecto
Otros.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Otros;
