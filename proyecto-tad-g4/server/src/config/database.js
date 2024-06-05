const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('bd_tad_g4', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos establecida con éxito.'))
    .catch(error => console.error('Error al conectar con la base de datos:', error));

module.exports = sequelize;
