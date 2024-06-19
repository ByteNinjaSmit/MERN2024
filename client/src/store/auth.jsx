import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [services, setServices] = useState("");
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  // Logged in
  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);
  // Tackeling The Logout Functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // JWT AUTONTICATION - to get current loggedIn user data
  const userAuthentication = async () => {
    if (!token) return;
    try {
      const response = await fetch("http://localhost:5000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization:authorizationToken ,
        },
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("User Data: ",data.userData);
        setUser(data.userData);
      } 
    } catch (error) {
      console.log("error fetching user data");
    }
  };
  // To Fetch the Services Data From Backend
  const getServices = async() =>{
    try {
      const response = await fetch("http://localhost:5000/api/data/service",{
        method:"GET",
      });
      if(response.ok){
        const data = await response.json();
        // console.log(data.msg);
        setServices(data);
      }else {
        console.log("Error fetching services:", response.status);
      }
      // console.log("services",response);
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  }


  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services,authorizationToken }}
    >
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
