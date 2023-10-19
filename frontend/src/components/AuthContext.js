import React, { createContext, useContext, useState } from 'react';

//1.Create an Authentication Context
const AuthContext = createContext();

//2.Create a Context Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('access_token', userData.access);
    localStorage.setItem('refresh_token', userData.refresh);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//3.reate a hook to access the context
export const useAuth = () => {
  return useContext(AuthContext);
};
