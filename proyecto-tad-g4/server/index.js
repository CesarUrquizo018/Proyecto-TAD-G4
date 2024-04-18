const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

// Middlewares de seguridad
app.use(helmet());

// Habilitar CORS para todas las rutas
app.use(cors());

// Logging de solicitudes HTTP
app.use(morgan('dev'));

// Middleware para parsear bodies de tipo JSON
app.use(express.json());

// Middleware para parsear bodies URL-encoded
app.use(express.urlencoded({ extended: true }));

// Importar rutas
const authRoutes = require('./src/routes/auth');
const proyectosRoutes = require('./src/routes/proyectos');
const usuariosRoutes = require('./src/routes/usuarios');

// Usar rutas
app.use('/api', authRoutes); // Tal vez quieras considerar colocar todas las rutas bajo el prefijo '/api'
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/usuarios', usuariosRoutes);

// Middleware para manejar errores - definir al final después de todas las rutas y middlewares
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
