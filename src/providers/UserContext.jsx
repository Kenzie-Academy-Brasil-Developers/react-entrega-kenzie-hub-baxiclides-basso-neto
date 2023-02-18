import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

//variável de context
export const UserContext = createContext({});

//componente de Provider
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  //formData = todos os campos de registo que estão na form
  const userSignup = async (formData) => {
    try {
      const response = await api.post("/users", formData);
      toast.success("Conta criada com sucesso!");
      navigate("/");
    } catch (error) {
      toast.error("Tente novamente");
    }
  };
  //formData = email e password
  const userLogin = async (formData) => {
    try {
      const response = await api.post("/sessions", formData);

      setUser(response.data.user);

      localStorage.setItem("@TOKEN", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
      toast.error("Dados inválidos!");
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");

    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          localStorage.removeItem("@TOKEN");
        }
      };
      userAutoLogin();
    }
  }, []);

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userSignup,
        userLogin,
        userLogout,
        modalIsOpen,
        setIsOpen,
        openModal,
        closeModal,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
