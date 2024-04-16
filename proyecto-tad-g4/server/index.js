// server/index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Configurar la conexión a la base de datos MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mydatabase'
});

// Ruta para manejar el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
      return res.status(400).json({ message: 'Por favor , proporciona un nombre de usuario y una contraseña xddddddd.' });
  }

  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, results) => {
      if (err) {
          return res.status(500).json({ message: 'Error al buscar el usuario en la base de datos.' });
      }

      if (results.length === 0) {
          return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
      }

      const user = results[0];

      try {
          if (await password, user.password) {
              // Contraseña válida, inicio de sesión exitoso
              return res.status(200).json({ message: 'Inicio de sesión exitoso.' });
          } else {
              // Contraseña incorrecta
              return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
          }
      } catch (error) {
          return res.status(500).json({ message: 'Error al comparar las contraseñas.' });
      }
  });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log('Servidor backend corriendo en el puerto ${PORT}');
});