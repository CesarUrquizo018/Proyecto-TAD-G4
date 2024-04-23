import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/registro_usuario.css';

function RegisterPage() {
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
            const response = await axios.post('http://localhost:3000/register', { username, codigo, email, foto_perfil: defaultProfilePhoto, password });
            setMessage(response.data.message);
            navigate('/home', { state: { usuario: response.data.usuario } });
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Error de conexión');
        }
    };

    const handleCreateClick = () => {
        navigate('/login');
    };

    return (
        <div className="crear_usuario">
            <h1>Crear usuario</h1>
            <form onSubmit={handleSubmit} className="crear_usuario-form">
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="codigo">Codigo:</label>
                    <input type="text" id="codigo" value={codigo} onChange={(e) => setCodigo(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn-crear_usuario">Crear Usuario</button>
                <button type="button" onClick={handleCreateClick} className="btn-login">Regresar</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default RegisterPage;
