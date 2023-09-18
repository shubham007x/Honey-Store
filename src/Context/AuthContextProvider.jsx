import React, { createContext, useState } from 'react'


export const AuthContext = createContext();



const AuthContextProvider = ({ children }) => {

  const [signArray, setSignArray] = useState([])
  const [nameLogin, setNameLogin] = useState("")


  return (
    <AuthContext.Provider value={{signArray, setSignArray, nameLogin, setNameLogin}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider