// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

import { useUser } from '../context/UserContext';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { loginUser } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/auth/login', { email, password });
            const usuario = response.data.usuario;

            loginUser(usuario);
            setMessage(response.data.message);
            navigate('/home');
        } catch (error) {
            setMessage(error.response ? error.response.data.message : 'Error de conexión');
        }
    };

    const handleCreateClick = () => {
        navigate('/register');
    };

    return (
        <div className="login">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn-login">Iniciar sesión</button>
                <button type="button" onClick={handleCreateClick} className="btn-create">Crear cuenta</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
}

export default LoginPage;
