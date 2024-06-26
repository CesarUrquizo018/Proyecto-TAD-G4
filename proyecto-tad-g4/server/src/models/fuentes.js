/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./proyecto');

class Fuentes extends Model {}

Fuentes.init({
    id_fuentes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreFuente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    URLFuente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FechaPublicacion: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Proyecto,
            key: 'id_proyecto'
        }
    }
}, {
    sequelize,
    modelName: 'fuentes',
    tableName: 'fuentes',
    timestamps: false
});

Fuentes.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Fuentes;
*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./proyecto'); // Importando Proyecto

class Fuentes extends Model {}

Fuentes.init({
    id_fuentes: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    NombreFuente: DataTypes.STRING(255),
    URLFuente: DataTypes.STRING(255),
    FechaPublicacion: DataTypes.DATEONLY,
    id_proyecto: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Fuentes',
    tableName: 'fuentes',
    timestamps: false
});

//Fuentes.belongsTo(Proyecto, { foreignKey: 'id_proyecto' }); // Estableciendo relación

module.exports = Fuentes;