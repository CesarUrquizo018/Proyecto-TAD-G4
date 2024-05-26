import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';

function DetailsProjectPage() {
    const { id } = useParams();
    const [proyecto, setProyecto] = useState(null);
    const [fuentes, setFuentes] = useState([]);
    const [anotaciones, setAnotaciones] = useState([]);
    const [otros, setOtros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const obtenerProyecto = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/proyectos/${id}`);
                if (response.status === 200) {
                    setProyecto(response.data);
                } else {
                    console.error('Error al obtener los detalles del proyecto');
                }
            } catch (error) {
                console.error('Error al obtener los detalles del proyecto:', error);
            }
        };

        const obtenerFuentes = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/fuentes/proyecto/${id}`);
                if (response.status === 200) {
                    setFuentes(response.data);
                } else {
                    console.error('Error al obtener las fuentes');
                }
            } catch (error) {
                console.error('Error al obtener las fuentes:', error);
            }
        };

        const obtenerAnotaciones = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/anotaciones/proyecto/${id}`);
                if (response.status === 200) {
                    setAnotaciones(response.data);
                } else {
                    console.error('Error al obtener las anotaciones');
                }
            } catch (error) {
                console.error('Error al obtener las anotaciones:', error);
            }
        };

        const obtenerOtros = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/otros/proyecto/${id}`);
                if (response.status === 200) {
                    setOtros(response.data);
                } else {
                    console.error('Error al obtener los otros');
                }
            } catch (error) {
                console.error('Error al obtener los otros:', error);
            }
        };

        const fetchData = async () => {
            await obtenerProyecto();
            await obtenerFuentes();
            await obtenerAnotaciones();
            await obtenerOtros();
            setLoading(false); // Finaliza el estado de carga después de obtener todos los datos
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Cargando...</div>; // Muestra el estado de carga
    }

    if (!proyecto) {
        return <div>Proyecto no encontrado</div>; // Muestra un mensaje si no se encuentra el proyecto
    }

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
            <h1>{proyecto.titulo}</h1>
            <p>{proyecto.descripcion}</p>
            <p>Creado por: {proyecto.usuario?.nombre} ({proyecto.usuario?.email})</p>
            <p>Fecha de creación: {formatDate(proyecto.fecha_creacion)}</p>
            <p>Ciclo: {proyecto.ciclo}</p>
            <p>Curso: {proyecto.curso}</p>

            <h2>Fuentes</h2>
            <ul>
                {fuentes.map(fuente => (
                    <li key={fuente.id_fuentes}>
                        <a href={fuente.URLFuente} target="_blank" rel="noopener noreferrer">{fuente.NombreFuente}</a> - {formatDate(fuente.FechaPublicacion)}
                    </li>
                ))}
            </ul>

            <h2>Anotaciones</h2>
            <ul>
                {anotaciones.map(anotacion => (
                    <li key={anotacion.id_anotaciones}>
                        {anotacion.ContenidoAnotacion} - {anotacion.usuario?.nombre}
                    </li>
                ))}
            </ul>

            <h2>Otros Recursos</h2>
            <ul>
                {otros.map(otro => (
                    <li key={otro.id_otros}>
                        {otro.NombreOtro}: {otro.DescripcionOtro}
                    </li>
                ))}
            </ul>

            <Link to="/myprojects">Volver a mis proyectos</Link>
        </div>
    );
}

export default DetailsProjectPage;
