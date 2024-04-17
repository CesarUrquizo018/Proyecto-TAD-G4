const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');

// Crear una instancia de Express
const app = express();
const authRoutes = require('./routes/auth');
const proyectosRoutes = require('./routes/proyectos');
const usuariosRoutes = require('./routes/usuarios');

app.use('/api', authRoutes);
app.use('/proyectos', proyectosRoutes);
app.use('/usuarios', usuariosRoutes);

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

// Aquí puedes añadir rutas y otros middlewares específicos de tu aplicación

// Middleware para manejar errores - definir al final después de todas las rutas
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
