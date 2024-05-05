import '../assets/styles/mis_proyectos.css'; // Ajusta la ruta si es necesario
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../contexto/UserContext';
import axios from 'axios';
import { formatDate } from '../utils/dateUtils';

function MisProyectosPage() {
  const { user } = useUser(); // Acceder al objeto usuario desde el contexto
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    obtenerProyectos();
  }, []); // La dependencia vacía asegura que este efecto se ejecute solo una vez cuando el componente se monta

  const obtenerProyectos = async () => {
    try {
      const response = await axios.post('http://localhost:3000/myproyect', {
        usuarioId: user.id_usuario
      });

      if (response.status === 200) {
        setProyectos(response.data.proyectos);
      } else {
        console.error('Error al obtener los proyectos');
      }
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
    }
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
              <Link to="/user">User</Link>
            </li>
            <li>
                <Link to="/myproyect">Mis Proyectos</Link>
              </li>
            <li>
              <Link to="/">Salir</Link>
            </li>
        </ul>
      </nav>
      <h1>Mis Proyectos</h1>
      <div>
        {proyectos.map(proyecto => (
          <div key={proyecto.id_proyecto} className="project-table">
            <h2 className='titulo-proyecto'>{proyecto.titulo}</h2>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Descripción</th>
                  <th>Fecha de creación</th>
                  <th>Ciclo</th>
                  <th>Curso</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{proyecto.id_proyecto}</td>
                  <td>{proyecto.descripcion}</td>
                  <td>{formatDate(proyecto.fecha_creacion)}</td>
                  <td>{proyecto.ciclo}</td>
                  <td>{proyecto.curso}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MisProyectosPage;