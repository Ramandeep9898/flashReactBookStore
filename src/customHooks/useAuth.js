import axios from "axios";
import React from "react";
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const flashToken = localStorage.getItem("flashToken");
  const [user, setUser] = useState();
  const [encodedToken, setEncodedToken] = useState();

  const logInAuth = async (loginDetails) => {
    console.log(loginDetails);
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginDetails.email,
        password: loginDetails.password,
      });

      if (response.status === 200) {
        console.log(response.data.encodedToken);
        localStorage.setItem("flashToken", response.data.encodedToken);
        setUser(response.data.foundUser);
        setEncodedToken(response.data.encodedToken);
      }
    } catch (error) {
      console.log("login post error", error.message);
    }
  };

  const logOutAuth = () => {
    localStorage.removeItem("flashToken");
    setUser(null);
    encodedToken(null);
  };

  const signUpAuth = async (signUpDetails) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: signUpDetails.firstName,
        lastName: signUpDetails.lastName,
        email: signUpDetails.email,
        password: signUpDetails.password,
      });
      if (response.status === 201) {
        localStorage.setItem("flashToken", response.data.encodedToken);
        setUser(response.data.createdUser);
        setEncodedToken(response.data.encodedToken);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, encodedToken, signUpAuth, logInAuth, logOutAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);
export { useAuth, AuthProvider };
