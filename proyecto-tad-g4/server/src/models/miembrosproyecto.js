const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Proyecto = require('./proyecto');

class MiembrosProyecto extends Model {}

MiembrosProyecto.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Usuario',  // Asegúrate de que el nombre del modelo es correcto
            key: 'id_usuario'
        }
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Proyecto',
            key: 'id_proyecto'
        }
    }
}, {
    sequelize,
    modelName: 'MiembrosProyecto',
    tableName: 'miembrosproyecto',
    timestamps: false
});

// Definiendo explícitamente las relaciones
Usuario.belongsToMany(Proyecto, { through: MiembrosProyecto, foreignKey: 'id_usuario' });
Proyecto.belongsToMany(Usuario, { through: MiembrosProyecto, foreignKey: 'id_proyecto' });

module.exports = MiembrosProyecto;
