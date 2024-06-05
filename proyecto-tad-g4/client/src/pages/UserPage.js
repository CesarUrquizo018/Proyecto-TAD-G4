// src/pages/UserPage.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';

function UserPage() {
  const { user } = useUser(); // Acceder al objeto usuario desde el contexto
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar si se muestra la contraseña
  const navigate = useNavigate();  // Hook para la navegación
  
  useEffect(() => {
    document.body.style.backgroundColor = '#343a40';  // Aplica el fondo oscuro

    return () => {
        document.body.style.backgroundColor = '';  // Restablece al estilo predeterminado al salir
    };
}, []);


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  if (!user) {
    // Redireccionar o mostrar mensaje si no hay usuario en el contexto
    return (
      <Container className="mt-4">
        <p>No se ha iniciado sesión. Por favor, vuelve a la página de inicio de sesión.</p>
        <Link to="/login">Ir a Iniciar Sesión</Link>
      </Container>
    );
  }

  const editarUsuario = (id) => {
    navigate(`/edit-usuario/${id}`); // Navegar a la página de edición
  };

  return (
    <Container className="mt-4 bg-dark text-white ">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/user" className="bg-primary">User</Nav.Link>
          <Nav.Link as={Link} to="/myprojects">Mis Proyectos</Nav.Link>
          <Nav.Link as={Link} to="/myprojects" responsivediv>Mis mensajes</Nav.Link>
          <Nav.Link as={Link} to="/">Salir</Nav.Link>
        </Nav>
      </Navbar>
      <Card className=" bg-dark text-white align-items-center "style={{ border: 'none' }}>
        <Card.Body>
          <Card.Title>!BIENVENIDO {user.nombre} ¡</Card.Title>
          <Table striped bordered hover size="sm" responsivediv variant="secondary" >
          <tbody>
            <tr>
                  <td>ID</td>
                  <td>{user.id_usuario}</td>
            </tr>
            <tr>
                  <td>Código</td>
                  <td>{user.codigo}</td>
            </tr>
            <tr>
                  <td>Email</td>
                  <td>{user.email}</td>
            </tr>
            <tr>
                  <td>Contraseña</td>
                  <td>{showPassword ? user.contrasena : "********"}</td>
            </tr>
          </tbody>
                
          </Table>
          <Button variant="primary" onClick={toggleShowPassword}>
            {showPassword ? 'Ocultar' : 'Mostrar'} Contraseña
          </Button>
          <Button variant="primary" onClick={editarUsuario} className="ms-2">
            Editar
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default UserPage;
