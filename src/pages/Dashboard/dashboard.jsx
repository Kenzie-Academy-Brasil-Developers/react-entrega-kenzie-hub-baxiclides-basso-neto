import { useNavigate } from "react-router-dom";
import StyledHeaderDashboard, { StyledMainDashboard } from "./dashboardstyle";
import {toast} from 'react-toastify'
const DashboardPage = () => {
  const userName = localStorage.getItem("@USENAME");
  const userModule = localStorage.getItem("@MODULE");

  const navigate = useNavigate()
  const logOff = ()=>{
         navigate('/')


    async function createTechnology(data) {
        try{
            api.post('users/techs', data)
        }catch(erro){
            toast.error('Tente novamente')
        }
    }
  }
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
                <button>+</button>
            </div>

        </section>
      </StyledMainDashboard>
    </>
  );
};

export default DashboardPage;
