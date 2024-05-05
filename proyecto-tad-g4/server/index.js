const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const proyectoRoutes = require('./src/routes/proyectoRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usar las rutas de usuario, proyecto y autenticación
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/proyectos', proyectoRoutes);
app.use('/api/auth', authRoutes);

// Middleware para manejar errores genéricos
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
