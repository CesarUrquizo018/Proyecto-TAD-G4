// src/pages/LoginPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css'; // Ajusta la ruta si es necesario
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useUser } from '../contexto/UserContext';
function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { loginUser } = useUser(); // Acceder a la función para establecer el usuario en el contexto
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:3000/login', { username, password });
        const usuario = response.data.usuario;
  
        // Establecer el usuario en el contexto después del inicio de sesión
        loginUser(usuario);
  
        setMessage(response.data.message);
        navigate('/home');
      } catch (error) {
        setMessage(error.response ? error.response.data.message : 'Error de conexión');
      }
    };

    const handleCreateClick = () => {
        // Utiliza navigate para ir a la página de registro
        navigate('/register'); // Ajusta la ruta según tu configuración de rutas
    };

    return (
        <div className="login">
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
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
