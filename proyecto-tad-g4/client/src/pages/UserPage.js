// src/pages/UserPage.js
import '../assets/styles/user_page.css'; // Ajusta la ruta si es necesario
import { useUser } from '../contexto/UserContext';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

  function UserPage() {
    const { user } = useUser();// Acceder al objeto usuario desde el contexto
    const [showPassword, setShowPassword] = useState(false); // Estado para controlar si se muestra la contraseña
    
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    return (
      <div>
        <div className="enlaces">
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
              <li>
              <Link to="/">Salir</Link>
            </li>
            </ul>
          </nav>
        </div>
  
        <div className="user-container">
          <h1>Bienvenido, {user.nombre}!</h1>
          <div>
            <label className="user-info-label">ID:</label>
            <span className="user-info-value">{user.id_usuario}</span>
          </div>
          <div>
            <label className="user-info-label">Código:</label>
            <span className="user-info-value">{user.codigo}</span>
          </div>
          <div>
            <label className="user-info-label">Email:</label>
            <span className="user-info-value">{user.email}</span>
          </div>
          <div>
            <label className="user-info-label">Contraseña:</label>
            {showPassword ? (
              <span className="user-info-value">{user.contrasena}</span>
            ) : (
              <span className="password-mask">********</span>
            )}
            <button onClick={toggleShowPassword}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
          </div>
        </div>
      </div>
    );
  }

export default UserPage;
