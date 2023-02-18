import React, { useState } from "react";
import StyledHeaderDashboard, {
  StyledMainDashboard,
  StyledNewTechstList,
} from "./Dashboardstyle";
import { useContext } from "react";
import Modal from "react-modal";
import StyledModal from "../modal/Modalnewtechform";
import TechsProvider from "../modal/Modalnewtechformpage";
import { UserContext } from "../../providers/UserContext";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { StyledUpdateTechForm, StyledBtn } from "../modal/ModalUpdateTech";
import { useEffect } from "react";

Modal.setAppElement("div");

const DashboardPage = () => {
  const token = localStorage.getItem("@TOKEN");

  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const { userLogout, user, modalIsOpen, openModal, closeModal } =
    useContext(UserContext);
  const [techsList, setTechsList] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedTech, setSelectedTech] = useState({});
  const [techId, setTechId] = useState("");

  const TechsLoading = async (id) => {
    try {
      const response = await api.get(`users/${id}`);

      const techsList = response.data.techs;

      setTechsList(techsList);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };
  TechsLoading(user.id);

  const TechsUpdate = async (id, formData) => {
    try {
      await api.put(`users/techs/${id}`, formData, { headers });
      const techsUpdated = techsList.map((tech) => {
        if (id === tech.id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });
      setTechsList(techsUpdated);
      toast.success("Tecnologia atualizada com sucesso!");
    } catch (error) {
      console.log(error);
      toast.error("Ocorreu um erro, tente novamente!");
    }
  };

  const { register, handleSubmit, watch } = useForm();

  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    setSelectedStatus(watch("status"));
  }, [watch("status")]);

  const submitUpdate = (formData) => {
    TechsUpdate(techId, formData);
    closeModal1();
  };

  const TechsRemove = async (id) => {
    try {
      const response = await api.delete(`users/techs/${id}`, {
        headers,
      });
      const newTechs = techsList.filter((filter) => filter.id !== id);
      setTechsList(newTechs);
      toast.success("Tecnologia removida com sucesso");
    } catch (error) {}
  };

  const handleModal = (Id, techTitle) => {
    setSelectedTech(techTitle);
    setIsModalOpen(true);
    setTechId(Id);
  };

  const closeModal1 = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <StyledHeaderDashboard>
        <div>
          <h1>Kenzie Hub</h1>
          <button onClick={userLogout}>Sair</button>
        </div>
      </StyledHeaderDashboard>

      <StyledMainDashboard>
        <section>
          <h2>Olá, {user.name}</h2>
          <h3>{user.course_module}</h3>
        </section>
        <section>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={openModal}>+</button>
          </div>

          <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <TechsProvider />
          </StyledModal>

          <div>
            <StyledNewTechstList>
              {loading ? (
                <p>Carregando...</p>
              ) : techsList.length > 0 ? (
                techsList.map((tech) => (
                  <li
                    data-tech-id={tech.id}
                    key={tech.id}
                    onClick={() =>
                      handleModal(tech.id, tech.title, tech.status)
                    }
                  >
                    <h2>{tech.title}</h2>
                    <h3>{tech.status}</h3>
                  </li>
                ))
              ) : (
                <h3>Você não possui tecnologia cadastrada</h3>
              )}
            </StyledNewTechstList>
          </div>
        </section>
      </StyledMainDashboard>
      {isModalOpen && (
        <StyledUpdateTechForm
          isOpen={selectedTech !== null}
          onRequestClose={closeModal1}
        >
          <header>
            <h2>Tecnologia Detalhes</h2>
            <span onClick={closeModal1}>X</span>
          </header>
          <main>
            <div>
              <h4>Nome da tecnologia</h4>
              <h3>{selectedTech}</h3>
              <h4>Status</h4>
              <form onSubmit={handleSubmit(submitUpdate)}>
                <select name="status" id="status" {...register("status")}>
                  <option value="">Escolha uma opção</option>
                  <option value="Iniciante">Iniciante</option>
                  <option value="Intermediário">Intermediário</option>
                  <option value="Avançado">Avançado</option>
                </select>
                <StyledBtn>
                  
                    <button type="submit">Salvar alterações</button>
                    <button
                      type="button"
                      className="primary"
                      onClick={() => {
                        TechsRemove(techId);
                        closeModal1();
                      }}
                    >
                      Excluir
                    </button>
                
                </StyledBtn>
              </form>
            </div>
          </main>
        </StyledUpdateTechForm>
      )}
    </>
  );
};

export default DashboardPage;
