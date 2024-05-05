const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Usuario = require('./usuario');
const Rol = require('./rol');

class UsuarioRol extends Model {}

UsuarioRol.init({
    id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Usuario',
            key: 'id_usuario'
        }
    },
    id_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
            model: 'Rol',
            key: 'id_rol'
        }
    }
}, {
    sequelize,
    modelName: 'UsuarioRol',
    tableName: 'usuario_rol',
    timestamps: false
});

// Definiendo explícitamente las relaciones
Usuario.belongsToMany(Rol, { through: UsuarioRol, foreignKey: 'id_usuario' });
Rol.belongsToMany(Usuario, { through: UsuarioRol, foreignKey: 'id_rol' });

module.exports = UsuarioRol;
