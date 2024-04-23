const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const app = express();

const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

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

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'bd_tad_g4'
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona un nombre de usuario y una contraseña.' });
  }

  db.query('SELECT * FROM usuario WHERE nombre = ?', [username], async (err, results) => {
    if (err) {
      console.error('Error al buscar el usuario en la base de datos:', err);
      return res.status(500).json({ message: 'Error al buscar el usuario en la base de datos.' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
    }

    const usuario = results[0];

    try {
      if (password === usuario.contrasena) {
        // Contraseña válida, inicio de sesión exitoso
        return res.status(200).json({ message: 'Inicio de sesión exitoso.',usuario:usuario });
      } else {
        // Contraseña incorrecta
        return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
      }
    } catch (error) {
      return res.status(500).json({ message: 'Error al comparar las contraseñas.' });
    }
  });
});

// Ruta para manejar la creación de usuario
app.post('/register', (req, res) => {
  const { username, codigo, email, foto_perfil,password } = req.body;

  db.query('INSERT INTO usuario (nombre, codigo, email, contrasena, foto_perfil) VALUES (?, ?, ?, ?, ?)',
      [username, codigo, email, password ,foto_perfil],
      (err, results) => {
          if (err) {
              console.error('Error al insertar nuevo usuario:', err);
              return res.status(500).json({ message: 'Error al crear el usuario.' });
          }
          db.query('SELECT * FROM usuario WHERE nombre = ?', [username], async (err, results) => {
            if (err) {
              console.error('Error al buscar el usuario en la base de datos:', err);
              return res.status(500).json({ message: 'Error al buscar el usuario en la base de datos.' });
            }
            const usuario = results[0];
            return res.status(200).json({ message: 'Usuario creado exitosamente.',usuario:usuario });
          });
      });
});

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
