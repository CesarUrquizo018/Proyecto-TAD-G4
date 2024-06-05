import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateUtils';
import { useUser } from '../context/UserContext';  // Asegúrate de que la ruta al contexto es correcta

import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function HomePage() {
  const { user } = useUser(); // Se mantiene por si necesitas acceder al usuario para otras funciones
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    obtenerProyectos();
      document.body.style.backgroundColor = '#343a40';  // Aplica el fondo oscuro

      return () => {
          document.body.style.backgroundColor = '';  // Restablece al estilo predeterminado al salir
      };
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
    <Container className="mt-4 bg-dark text-white">
        <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home" active className="bg-primary">Home</Nav.Link>
              <Nav.Link as={Link} to="/user" responsivediv>User</Nav.Link>
              <Nav.Link as={Link} to="/myprojects" responsivediv>Mis Proyectos</Nav.Link>
              <Nav.Link as={Link} to="/myprojects" responsivediv>Mis mensajes</Nav.Link>
              <Nav.Link as={Link} to="/" responsivediv>Salir</Nav.Link>
            </Nav>
        </Navbar>

      <h1 className="mb-4 text-white">Proyectos</h1>
      {proyectos.map(proyecto => (
        <Card key={proyecto.id_proyecto} className="mb-3" >
          <Card.Body >
            <Card.Title>{proyecto.titulo}</Card.Title>
            <Card.Text>
              {proyecto.descripcion}
            </Card.Text>
            <Table striped bordered hover size="sm" responsivediv variant="secondary" >
              <tbody>
                <tr>
                  <td>ID</td>
                  <td>{proyecto.id_proyecto}</td>
                </tr>
                <tr>
                  <td>Fecha de creación</td>
                  <td>{formatDate(proyecto.fecha_creacion)}</td>
                </tr>
                <tr>
                  <td>Ciclo</td>
                  <td>{proyecto.ciclo}</td>
                </tr>
                <tr>
                  <td>Curso</td>
                  <td>{proyecto.curso}</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary">ENVIAR SOLICITUD</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default HomePage;

