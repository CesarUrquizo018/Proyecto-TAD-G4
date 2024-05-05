import React, { createContext, useState, useContext } from 'react';

// Creamos el contexto de usuario
const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const loginUser = (userData) => {
      setUser(userData);
    };
  
    return (
      <UserContext.Provider value={{ user, loginUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => useContext(UserContext);
