import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const storeTokenInLS = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // Logged in
  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // Logout Function
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("use Auth must be used within the AuthProvider");
  }
  return useContext(AuthContext);
};
