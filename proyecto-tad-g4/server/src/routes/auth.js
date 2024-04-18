const express = require('express');
const router = express.Router();
const { Usuario } = require('../models/usuario');
const bcrypt = require('bcryptjs');

// Ruta para manejar el inicio de sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Por favor, proporciona tanto el nombre de usuario como la contraseña.' });
    }

    try {
        const user = await Usuario.findOne({ where: { username: username } });

        if (!user) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
        }

        const isMatch = await bcrypt.compare(password, user.contrasena);
        if (!isMatch) {
            return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos.' });
        }

        res.status(200).json({ message: 'Inicio de sesión exitoso.' });

    } catch (error) {
        return res.status(500).json({ message: 'Error al buscar el usuario en la base de datos.' });
    }
});

module.exports = router;
