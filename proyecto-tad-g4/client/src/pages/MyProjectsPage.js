import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';
import { useUser } from '../context/UserContext';
import '../assets/styles/my_projects.css'; // Asegúrate de que la ruta es correcta
import agregarProyectoImg from '../images/agregarProyecto.png';

function MyProjectsPage() {
  const { user } = useUser(); // Acceder al objeto usuario desde el contexto
  const [proyectos, setProyectos] = useState([]);
  const navigate = useNavigate();  // Hook para la navegación

  useEffect(() => {
    obtenerProyectos();
  }, []);

  const obtenerProyectos = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/proyectos/mis-proyectos/${user.id_usuario}`);
      if (response.status === 200) {
        setProyectos(response.data);
      } else {
        console.error('Error al obtener los proyectos');
      }
    } catch (error) {
      console.error('Error al obtener los proyectos:', error);
    }
  };

  const confirmarYBorrarProyecto = (id) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este proyecto?')) {
      borrarProyecto(id);
    }
  };

  const borrarProyecto = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/api/proyectos/${id}`);
      if (response.status === 200) {
        setProyectos(proyectos.filter(proyecto => proyecto.id_proyecto !== id)); // Actualizar la lista de proyectos
        alert('Proyecto eliminado exitosamente.');
      } else {
        console.error('Error al borrar el proyecto');
      }
    } catch (error) {
      console.error('Error al borrar el proyecto:', error);
    }
  };

  const editarProyecto = (id) => {
    navigate(`/edit-project/${id}`); // Navegar a la página de edición
  };

  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/myprojects">Mis Proyectos</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
      </nav>
      <h1>Mis Proyectos</h1>
      
      <Link to="/create-project" className="crear-proyecto-link">
        Crear Proyecto
        <img src={agregarProyectoImg} alt="(+)" className="crear-proyecto-link img" />
        </Link>
        
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
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{proyecto.id_proyecto}</td>
                  <td>{proyecto.descripcion}</td>
                  <td>{formatDate(proyecto.fecha_creacion)}</td>
                  <td>{proyecto.ciclo}</td>
                  <td>{proyecto.curso}</td>
                  <td>
                    <button onClick={() => editarProyecto(proyecto.id_proyecto)}>Editar</button>
                    <button onClick={() => confirmarYBorrarProyecto(proyecto.id_proyecto)}>Borrar</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjectsPage;
