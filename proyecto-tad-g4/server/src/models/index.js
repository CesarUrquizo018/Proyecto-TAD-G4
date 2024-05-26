const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = require('./usuario');
const Proyecto = require('./proyecto');
const Fuente = require('./fuentes');
const Anotacion = require('./anotaciones');
const Otro = require('./otros');

// Definir relaciones
Proyecto.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Proyecto.hasMany(Fuente, { foreignKey: 'id_proyecto' });
Proyecto.hasMany(Anotacion, { foreignKey: 'id_proyecto' });
Proyecto.hasMany(Otro, { foreignKey: 'id_proyecto' });

Fuente.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });
Anotacion.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });
Anotacion.belongsTo(Usuario, { foreignKey: 'id_usuario' });
Otro.belongsTo(Proyecto, { foreignKey: 'id_proyecto' });

module.exports = {
    Usuario,
    Proyecto,
    Fuente,
    Anotacion,
    Otro,
    sequelize
};
