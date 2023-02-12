import { useNavigate } from "react-router-dom";
import StyledHeaderDashboard, {
  StyledMainDashboard,
  StyledNewTechstList,
} from "./dashboardstyle";
import { toast } from "react-toastify";
import { useState, useContext } from "react";
import Modal from "react-modal";
import ModalNewTech from "../ModalNewTechForm/modalnewtechformpage";
import StyledModal from "../ModalNewTechForm/modalnewtechform";

Modal.setAppElement("div");

const DashboardPage = () => {
  const userName = localStorage.getItem("@USENAME");
  const userModule = localStorage.getItem("@MODULE");
  const newTechs = JSON.parse(localStorage.getItem('@TECHSLIST'))
  

  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const logOff = () => {
    localStorage.clear()
    navigate("/");
  };

  return (
    <>
      <StyledHeaderDashboard>
        <div>
          <h1>Kenzie Hub</h1>
          <button onClick={logOff}>Sair</button>
        </div>
      </StyledHeaderDashboard>

      <StyledMainDashboard>
        <section>
          <h2>Olá, {userName}</h2>
          <h3>{userModule}</h3>
        </section>
        <section>
          <div>
            <h2>Tecnologias</h2>
            <button onClick={openModal}>+</button>
          </div>

          <StyledModal isOpen={modalIsOpen} onRequestClose={closeModal}>
            <ModalNewTech closeModal={closeModal} />
          </StyledModal>

          <div>
            <StyledNewTechstList>
        
                    {/* {newTechs.map((createTech) => (
                      <li key={createTech.id}>
                        <h2>{createTech.title}</h2>
                        <h3>{createTech.status}</h3>
                      </li>
                    ))} */}
            </StyledNewTechstList>
          </div>
        </section>
      </StyledMainDashboard>
    </>
  );
};

export default DashboardPage;
