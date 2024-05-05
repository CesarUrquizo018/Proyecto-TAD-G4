import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

function CreateProjectPage() {
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [ciclo, setCiclo] = useState('');
    const [curso, setCurso] = useState('');
    const navigate = useNavigate();
    const { user } = useUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const proyecto = {
                titulo,
                descripcion,
                fecha_creacion: new Date().toISOString().slice(0, 10), // Asumiendo que se guarda la fecha actual como fecha de creación
                ciclo,
                curso,
                id_usuario: user.id_usuario
            };

            const response = await axios.post('http://localhost:3000/api/proyectos', proyecto);
            navigate('/myprojects'); // Redirige al usuario a sus proyectos después de crear uno
        } catch (error) {
            console.error('Error al crear el proyecto:', error);
        }
    };

    return (
        <div>
            <h1>Crear Nuevo Proyecto</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={titulo}
                    onChange={e => setTitulo(e.target.value)}
                    placeholder="Título del proyecto"
                    required
                />
                <textarea
                    value={descripcion}
                    onChange={e => setDescripcion(e.target.value)}
                    placeholder="Descripción del proyecto"
                    required
                />
                <input
                    type="number"
                    value={ciclo}
                    onChange={e => setCiclo(e.target.value)}
                    placeholder="Ciclo académico"
                    required
                />
                <input
                    type="text"
                    value={curso}
                    onChange={e => setCurso(e.target.value)}
                    placeholder="Curso relacionado"
                    required
                />
                <button type="submit">Crear Proyecto</button>
            </form>
        </div>
    );
}

export default CreateProjectPage;
