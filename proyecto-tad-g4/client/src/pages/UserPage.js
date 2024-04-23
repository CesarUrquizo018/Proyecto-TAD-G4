// src/pages/UserPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../assets/styles/user_page.css'; // Ajusta la ruta si es necesario

function UserPage(){
  const location = useLocation();
  const usuario = location.state.usuario;

  // Usa el objeto del usuario aquí

  return (
    <div>
      <h1>Bienvenido, {usuario.nombre}!</h1>
      <label>id: {usuario.id_usuario}</label>
      <label>Codigo: {usuario.codigo}</label>
      <label>Email: {usuario.email}</label>
      <label>Contraseña: {usuario.contrasena}</label>
      <label>Foto_perfil: {usuario.foto_perfil}</label>
      {/* Mostrar otros datos del usuario según sea necesario */}
    </div>
  );
}

export default UserPage;