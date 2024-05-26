import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/register_user.css';  // Asegúrate de que la ruta es correcta

function CreateUserPage() {
    const [username, setUsername] = useState('');
    const [codigo, setCodigo] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Establecer el valor predeterminado para la foto de perfil
    const defaultProfilePhoto = `${username}.jpg`;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Asegúrate de que la URL apunta a la ruta correcta configurada en tu servidor
            const response = await axios.post('http://localhost:3000/api/auth/register', {
                nombre: username,
                codigo: codigo,
                email: email,
                contrasena: password,
                foto_perfil: defaultProfilePhoto
            });
            setMessage(response.data.message);
            // Navega a la página de inicio después del registro exitoso
            navigate('/home');
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Error de conexión');
        }
    };

    const handleCreateClick = () => {
        navigate('/login');  // Asegúrate de que esta ruta es correcta
    };

    return (
        <div className="crear_usuario">
            <h1>Crear usuario</h1>
            <form onSubmit={handleSubmit} className="crear_usuario-form">
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="codigo">Código:</label>
                    <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="btn-crear_usuario">Crear Usuario</button>
                <button type="button" onClick={handleCreateClick} className="btn-login">Regresar</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default CreateUserPage;
