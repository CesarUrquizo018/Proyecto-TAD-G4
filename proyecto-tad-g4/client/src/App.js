import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
<<<<<<< HEAD
import CreateUserPage from './pages/CreateUserPage';
import UserPage from './pages/UserPage';
import MyProjectsPage from './pages/MyProjectsPage';
import CreateProjectPage from './pages/CreateProjectPage';
import EditProjectPage from './pages/EditProjectPage';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<CreateUserPage />} />
          <Route path="/home" element={<PrivateRoute element={HomePage} />} />
          <Route path="/user" element={<PrivateRoute element={UserPage} />} />
          <Route path="/myprojects" element={<PrivateRoute element={MyProjectsPage} />} />
          <Route path="/create-project" element={<PrivateRoute element={CreateProjectPage} />} />
          <Route path="/edit-project/:id" element={<PrivateRoute element={EditProjectPage} />} />
        </Routes>
=======
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
import MisProyectosPage from './pages/MisProyectosPage';
import { UserProvider } from './contexto/UserContext';

const App = () => {
  return (
    <UserProvider> 
      <Router>
        <div>
          {/* Rutas */}
          <Routes>
            <Route path="/home" element={<HomePage />} exact />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/myproyect" element={<MisProyectosPage />} />
          </Routes>
        </div>
>>>>>>> 8de5989055a15137c863151da87a4abeeabb3449
      </Router>
    </UserProvider>
  );
};

export default App;
