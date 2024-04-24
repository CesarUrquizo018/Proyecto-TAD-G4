// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserPage from './pages/UserPage';
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
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
