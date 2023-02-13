import { createContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";

export const NewTechContext = createContext([]);

const ModalNewTech = ({ closeModal }) => {
  const token = localStorage.getItem("@TOKEN");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const { register, handleSubmit } = useForm();

  const newTechRequest = async (data) => {
    try {
      const response = await api.post("users/techs", data, { headers });
      const responseObj = response.data;
      const responseArray = [responseObj];

      localStorage.setItem("@TECHSLIST", JSON.stringify(responseArray));

      toast.success("Tecnologia criada com sucesso");
      closeModal();
    } catch (error) {
      toast.error("Tente novamente");
    }
  };

  return (
    <>
      <header>
        <h1>Cadastrar Tecnologia</h1>
        <span onClick={closeModal}>x</span>
      </header>
      <main>
        <form onSubmit={handleSubmit(newTechRequest)}>
          <label htmlFor="title">Nome</label>
          <input
            type="text"
            placeholder="Nome da tecnologia"
            id="title"
            {...register("title")}
          />
          <label htmlFor="status">Selecionar status</label>
          <select name="status" id="status" {...register("status")}>
            Selecione o status
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </main>
    </>
  );
};

export default ModalNewTech;
