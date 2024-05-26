const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const proyectoRoutes = require('./src/routes/proyectoRoutes');
const authRoutes = require('./src/routes/authRoutes');
const fuentesRoutes = require('./src/routes/fuentesRoutes');
const anotacionesRoutes = require('./src/routes/anotacionesRoutes');
const otrosRoutes = require('./src/routes/otrosRoutes');
const { sequelize } = require('./src/models/index'); // Importa la configuración de la base de datos y los modelos

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
app.use('/api/fuentes', fuentesRoutes);
app.use('/api/anotaciones', anotacionesRoutes);
app.use('/api/otros', otrosRoutes);

// Middleware para manejar errores genéricos
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Sincronizar la base de datos solo en desarrollo
if (process.env.NODE_ENV !== 'production') {
    sequelize.sync({ alter: true })
        .then(() => {
            console.log('Tablas sincronizadas');
        })
        .catch(error => {
            console.error('Error al sincronizar las tablas:', error);
        });
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
