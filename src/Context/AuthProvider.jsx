import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const onLogin = async (inputUser, inputPass) => {
    try {
      setIsError(false);
      setIsLoading(true);
      const res = await axios.post(`https://reqres.in/api/register`, {
        email: inputUser,
        password: inputPass,
      });
      setIsAuth(res.data.token);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const onLogout = (params) => {
    setIsAuth(params);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, isLoading, onLogin, onLogout, isError }}
    >
      {children}
    </AuthContext.Provider>
  );
};
