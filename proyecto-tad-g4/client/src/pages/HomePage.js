// src/pages/HomePage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import '../assets/styles/user_page.css'; // Ajusta la ruta si es necesario
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function HomePage(){
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
          </ul>
        </nav>
      <h1>Home Page</h1>
      {/* Otros elementos de tu Home Page aquí */}
    </div>
  );
};

export default HomePage;
