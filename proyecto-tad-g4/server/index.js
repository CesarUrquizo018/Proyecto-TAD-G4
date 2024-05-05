const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const proyectoRoutes = require('./src/routes/proyectoRoutes');
const authRoutes = require('./src/routes/authRoutes');

const app = express();
<<<<<<< HEAD
=======

const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

// Middlewares de seguridad
>>>>>>> 8de5989055a15137c863151da87a4abeeabb3449
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

<<<<<<< HEAD
=======
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

// Ruta para manejar HomePage
app.post('/home', (req, res) => {
  const { usuarioId } = req.body;

  if (!usuarioId) {
    return res.status(400).json({ message: 'ID de usuario no proporcionado' });
  }

  // Realizar la consulta a la base de datos para obtener los proyectos
  db.query('SELECT * FROM proyecto WHERE id_usuario != ?', [usuarioId], (err, results) => {
    if (err) {
      console.error('Error al obtener los proyectos:', err);
      return res.status(500).json({ message: 'Error al obtener los proyectos' });
    }

    return res.status(200).json({ proyectos: results });
  });
});

// Ruta para manejar MisProyectos
app.post('/myproyect', (req, res) => {
  const { usuarioId } = req.body;

  if (!usuarioId) {
    return res.status(400).json({ message: 'ID de usuario no proporcionado' });
  }

  // Realizar la consulta a la base de datos para obtener los proyectos
  db.query('SELECT * FROM proyecto WHERE id_usuario = ?', [usuarioId], (err, results) => {
    if (err) {
      console.error('Error al obtener los proyectos:', err);
      return res.status(500).json({ message: 'Error al obtener los proyectos' });
    }

    return res.status(200).json({ proyectos: results });
  });
});

// Iniciar el servidor
>>>>>>> 8de5989055a15137c863151da87a4abeeabb3449
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
