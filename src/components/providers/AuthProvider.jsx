import { useEffect, useState } from "react";
import { AuthContext } from "../../context";

export default function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  useEffect (() => {
    const storedAuth = localStorage.getItem("isAuth")
    if (storedAuth === "true") {
      setIsAuth(true)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
