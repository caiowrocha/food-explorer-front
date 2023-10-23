import { useState, useEffect, createContext, useContext } from "react";

import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [userData, setUserData] = useState({});
  const [isLoading, setLoading] = useState(false);

  async function signIn({ email, password }) {
    try {
      setLoading(true);
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));
      localStorage.setItem("@foodexplorer:token", token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      setUserData({ user, token });

      setLoading(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível realizar o login");
      }
      setLoading(false);
    }
  }

  function signOut() {
    localStorage.removeItem("@foodexplorer:token");
    localStorage.removeItem("@foodexplorer:user");
    setUserData({});
  }

  async function updateUserProfile({ user }) {
    try {
      setLoading(true);
      await api.put("/users", user);
      localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

      setUserData({ user, token: userData.token });
      alert("O seu perfil foi atualizado");

      setLoading(false);
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível atualizar o seu perfil");
      }
      setLoading(false);
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("@foodexplorer:token");
    const user = localStorage.getItem("@foodexplorer:user");

    if (token && user) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    setUserData({
      user: JSON.parse(user),
      token,
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        isLoading,
        setLoading,
        updateUserProfile,
        user: userData.user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
