import React, { createContext, useContext, useState } from "react";

//criando o contexto
const AuthContext = createContext();


export const Context = ({ children }) => {
  const [email, setEmail] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  //funçoes
  const login = (email, token) => {
    setEmail(email);
    setAccessToken(token);
    
  };

  //funçoes
  const logout = () => {
    setEmail(null)
    setAccessToken(null)
  };

  //provider do q posso pushar
  return (
    <AuthContext.Provider
      value={{ login, logout, email, accessToken }}>
      {children}
    </AuthContext.Provider>
  );
};


//exportando o contexto para pushar as informações
export const useAuth = () => {
  return useContext(AuthContext);
};
