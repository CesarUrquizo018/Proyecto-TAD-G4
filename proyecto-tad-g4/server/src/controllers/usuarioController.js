// controllers/usuarioController.js

const { Usuario } = require('../models/usuario');
const bcrypt = require('bcryptjs');

const usuarioController = {
  
  // Listar todos los usuarios
  listarUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  
  // Obtener un usuario por ID
  obtenerUsuario: async (req, res) => {
    try {
      const usuario = await Usuario.findByPk(req.params.id);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).send('Usuario no encontrado');
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  
  // Iniciar sesión
  login: async (req, res) => {
    const { username, password } = req.body;
    try {
      const usuario = await Usuario.findOne({ where: { username } });
      if (!usuario) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
      }
      const esValido = await bcrypt.compare(password, usuario.password);
      if (!esValido) {
        return res.status(401).json({ message: 'Credenciales incorrectas' });
      }
      // Aquí podrías generar un token, iniciar sesión, etc.
      res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  
  // Registar un usuario
  registrarUsuario: async (req, res) => {
    // Logica para crear un usuario...
  },

  // ... otros métodos para manejar la lógica del usuario

};

module.exports = usuarioController;
