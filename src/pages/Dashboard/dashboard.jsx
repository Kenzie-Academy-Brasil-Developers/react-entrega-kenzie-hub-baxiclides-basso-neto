import React from "react";
import StyledHeaderDashboard, { StyledMainDashboard } from "./Dashboardstyle";
import { useContext } from "react";
import Modal from "react-modal";
import StyledModal from "../modal/Modalnewtechform";
import TechsProvider from "../modal/Modalnewtechformpage";
import { UserContext } from "../../providers/UserContext";

Modal.setAppElement("div");

const DashboardPage = () => {
  const { userLogout, user, modalIsOpen, openModal, closeModal } =
    useContext(UserContext);

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
            {/* <ModalNewTech closeModal={closeModal} /> */}
          </StyledModal>

          {/* <div>
            <StyledNewTechstList>
              {newTechs.length > 0 ? (
                newTechs.map((createTech) => (
                  <li key={createTech.id}>
                    <h2>{createTech.title}</h2>
                    <h3>{createTech.status}</h3>
                  </li>
                ))
              ) : (
                <h3>Você não possui tecnologia cadastrada</h3>
              )}
            </StyledNewTechstList>
          </div> */}
        </section>
      </StyledMainDashboard>
    </>
  );
};

export default DashboardPage;
