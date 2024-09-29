import React, { createContext, useContext, useState } from 'react';

// Crear el contexto
const UserContext = createContext();

// Crear el provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const addWord = (word) => {
    console.log(`Palabra añadida: ${word}`);
  };

  return (
    <UserContext.Provider value={{ user, setUser, addWord }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook para usar el contexto
export const useUser = () => {
  return useContext(UserContext);
};
