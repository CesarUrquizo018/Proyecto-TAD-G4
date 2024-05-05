// src/pages/EditProjectPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditProjectPage() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [ciclo, setCiclo] = useState('');
  const [curso, setCurso] = useState('');
  const navigate = useNavigate();
  const { id } = useParams(); // Obtener el ID del proyecto desde la URL

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/proyectos/${id}`);
        const { titulo, descripcion, ciclo, curso } = response.data;
        setTitulo(titulo);
        setDescripcion(descripcion);
        setCiclo(ciclo);
        setCurso(curso);
      } catch (error) {
        console.error('Error al obtener el proyecto:', error);
      }
    };
    fetchProyecto();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const proyecto = {
        titulo,
        descripcion,
        ciclo,
        curso,
      };
      await axios.put(`http://localhost:3000/api/proyectos/${id}`, proyecto);
      navigate('/myprojects'); // Redirigir al usuario a la lista de sus proyectos después de actualizar
    } catch (error) {
      console.error('Error al actualizar el proyecto:', error);
    }
  };

  return (
    <div>
      <h1>Editar Proyecto</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="titulo">Título del Proyecto:</label>
          <input
            id="titulo"
            type="text"
            value={titulo}
            onChange={e => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="descripcion">Descripción:</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={e => setDescripcion(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="ciclo">Ciclo:</label>
          <input
            id="ciclo"
            type="number"
            value={ciclo}
            onChange={e => setCiclo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="curso">Curso:</label>
          <input
            id="curso"
            type="text"
            value={curso}
            onChange={e => setCurso(e.target.value)}
            required
          />
        </div>
        <button type="submit">Actualizar Proyecto</button>
      </form>
    </div>
  );
}

export default EditProjectPage;
