// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd-tad-g4', 'root', 'admin1', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3308
});

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida con éxito.'))
    .catch(error => console.error('Error al conectar con la base de datos:', error));

module.exports = sequelize;
