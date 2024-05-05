import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';
import { useUser } from '../context/UserContext';  // Asegúrate de que la ruta al contexto es correcta
import '../assets/styles/home.css'; // Verifica que la ruta al CSS es correcta

function HomePage() {
  const { user } = useUser(); // Se mantiene por si necesitas acceder al usuario para otras funciones
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    obtenerProyectos();
  }, []); // La dependencia vacía asegura que este efecto se ejecute solo una vez cuando el componente se monta

  const obtenerProyectos = async () => {
    try {
      // Elimina los parámetros ya que quieres obtener todos los proyectos
      const response = await axios.get(`http://localhost:3000/api/proyectos`);

      if (response.status === 200) {
        setProyectos(response.data);  // Asegúrate de que la respuesta del backend se maneje correctamente
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
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/user">User</Link></li>
          <li><Link to="/myprojects">Mis Proyectos</Link></li>
          <li><Link to="/">Salir</Link></li>
        </ul>
      </nav>
      <h1>Proyectos</h1>
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

export default HomePage;

