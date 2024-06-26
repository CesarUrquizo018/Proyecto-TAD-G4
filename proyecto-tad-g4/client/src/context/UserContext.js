import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

// Creamos el contexto de usuario
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.defaults.headers.common['x-auth-token'] = token;
            // Puedes realizar una solicitud para obtener los datos del usuario autenticado si es necesario
        }
    }, []);

    const loginUser = (userData, token) => {
        localStorage.setItem('token', token);
        axios.defaults.headers.common['x-auth-token'] = token;
        setUser(userData);
    };

    const logoutUser = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['x-auth-token'];
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
