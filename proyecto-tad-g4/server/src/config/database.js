// src/config/database.js

const { Sequelize } = require('sequelize');

// Configuración de Sequelize para conectarse a tu base de datos
const sequelize = new Sequelize('bd-tad-g4', 'root', 'admin1', {
  host: 'localhost',
  dialect: 'mysql', // Asegúrate de que el dialecto es correcto para MySQL
  // Otras configuraciones, como el pooling de conexiones, se pueden agregar aquí si es necesario
});

module.exports = sequelize;
