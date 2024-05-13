// src/pages/UserPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/user.css'; 

function UserPage() {
  const { user } = useUser(); // Acceder al objeto usuario desde el contexto
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si se muestra la contraseña
  const navigate = useNavigate();  // Hook para la navegación

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (!user) {
    // Redireccionar o mostrar mensaje si no hay usuario en el contexto
    return (
      <div>
        <p>No se ha iniciado sesión. Por favor, vuelve a la página de inicio de sesión.</p>
        <Link to="/login">Ir a Iniciar Sesión</Link>
      </div>
    );
  }

  const editarUsuario = (id) => {
    navigate(`/edit-usuario/${id}`); // Navegar a la página de edición
  };

  return (
    <div>
  <div className="enlaces">
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/myprojects">Mis Proyectos</Link></li>    
        <li><Link to="/">Salir</Link></li>
      </ul>
    </nav>
  </div>

  <div className="user-container">
    <div className="titulo">Bienvenido, {user.nombre}!</div>
    <div>
    <div>
  <div className="user-info">
    <div className="user-info-label">ID:</div>
    <div className="user-info-value">{user.id_usuario}</div>
  </div>
  <div className="user-info">
    <div className="user-info-label">Código:</div>
    <div className="user-info-value">{user.codigo}</div>
  </div>
  <div className="user-info">
    <div className="user-info-label">Email:</div>
    <div className="user-info-value">{user.email}</div>
  </div>
</div>
      <div  className="user-info">
      <div className="user-info-label">Contraseña:</div>
        {showPassword ? (
          <div className="user-info-value">{user.contrasena}</div>
        ) : (
          <div className="user-info-value">********</div>
        )}
        <button className="botonContrasena" onClick={toggleShowPassword}>{showPassword ? 'Ocultar' : 'Mostrar'}</button>
        
      </div>
      <div>
        <button className="botonEditar" onClick={() => editarUsuario(user.id_usuario)}>Editar</button>
      </div>
    </div>
  </div>
</div>
  );
}

export default UserPage;
