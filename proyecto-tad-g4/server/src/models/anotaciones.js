/*const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Proyecto = require('./proyecto');
const Usuario = require('./usuario');

class Anotaciones extends Model {}

Anotaciones.init({
    id_anotaciones: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ContenidoAnotacion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
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
    modelName: 'anotaciones',
    tableName: 'anotaciones',
    timestamps: false
});

Anotaciones.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });
Anotaciones.belongsTo(Usuario, { foreignKey: 'id_usuario' });

module.exports = Anotaciones;
*/

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario'); // Importando Usuario
const Proyecto = require('./proyecto');

class Anotaciones extends Model {}

Anotaciones.init({
    id_anotaciones: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ContenidoAnotacion: DataTypes.TEXT,
    id_usuario: DataTypes.INTEGER,
    id_proyecto: DataTypes.INTEGER
}, {
    sequelize,
    modelName: 'Anotaciones',
    tableName: 'anotaciones',
    timestamps: false
});

//Anotaciones.belongsTo(Usuario, { foreignKey: 'id_usuario' }); // Estableciendo relación
//Anotaciones.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = Anotaciones;
