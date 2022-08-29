import React, { useState ,createContext } from "react";
// import React from "react";
// import  from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const handleUp=()=>{

    setLogin(!login)

  }


  return <AuthContext.Provider value={{login,handleUp}} >{children}</AuthContext.Provider>;
};
