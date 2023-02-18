import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";

export const TechsContext = createContext({});

const TechsProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);
  const token = localStorage.getItem("@TOKEN");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  //formData = title e status - virão do formulario
  const techsCreate = async (formData) => {
    try {
      const response = await api.post("users/techs", formData, { headers });

      const responseObj = response.data;

      const responseArray = [responseObj];
      console.log(responseArray);

      setTechs([...techs, responseObj]);

      toast.success("Tecnologia criada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    }
  };

  return (
    <>
      <TechsContext.Provider value={{ techsCreate }}>
        {children}
      </TechsContext.Provider>
    </>
  );
};

export default TechsProvider;
