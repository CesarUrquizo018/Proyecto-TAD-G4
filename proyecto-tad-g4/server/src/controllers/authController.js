const Usuario = require('../models/usuario');

exports.login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Por favor, proporciona un correo electrónico y una contraseña.' });
    }

    try {
        const usuario = await Usuario.findOne({ where: { email: email } });
        if (!usuario || password !== usuario.contrasena) {
            return res.status(401).json({ message: 'Correo electrónico o contraseña incorrectos.' });
        }
        return res.status(200).json({ message: 'Inicio de sesión exitoso.', usuario: usuario });
    } catch (error) {
        console.error('Error al validar el usuario:', error);
        return res.status(500).json({ message: 'Error al procesar la solicitud.' });
    }
};

exports.register = async (req, res) => {
    const { nombre, email, contrasena, foto_perfil } = req.body;

    try {
        const nuevoUsuario = await Usuario.create({
            nombre,
            email,
            contrasena,
            foto_perfil
        });

        return res.status(200).json({ message: 'Usuario creado exitosamente.', usuario: nuevoUsuario });
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        return res.status(500).json({ message: 'Error al crear el usuario.' });
    }
};
