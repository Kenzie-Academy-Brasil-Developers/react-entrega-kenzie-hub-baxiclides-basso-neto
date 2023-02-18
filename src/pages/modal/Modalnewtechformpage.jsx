import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/TechsContext";
import { UserContext } from "../../providers/UserContext";

const ModalNewTech = () => {
  const { register, handleSubmit } = useForm();
  const { techsCreate } = useContext(TechsContext);
  const { closeModal } = useContext(UserContext);

  const submit = (formData) => {
    techsCreate(formData);
  };

  return (
    <>
      <header>
        <h1>Cadastrar Tecnologia</h1>
        <span onClick={closeModal}>x</span>
      </header>
      <main>
        <form onSubmit={handleSubmit(submit)}>
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
          <button type="submit" onClick={closeModal} >Cadastrar Tecnologia</button>
        </form>
      </main>
    </>
  );
};

export default ModalNewTech;
