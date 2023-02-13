import { useForm } from "react-hook-form";
import StyledHeaderLogin from "./loginstyle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const formShema = yup.object().shape({
  email: yup.string().required("Email inválido").email("Email inválido"),
  password: yup.string().required("Senha Inválida"),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formShema),
  });

  const navigate = useNavigate();

  const createLogin = () => {
    navigate("/signup");
  };

  const login = async (data) => {
    try {
      const loggeduser = await api.post("sessions", data);
      localStorage.setItem("@TOKEN", loggeduser.data.token);
      localStorage.setItem("@USERID", loggeduser.data.user.id);
      localStorage.setItem("@USENAME", loggeduser.data.user.name);
      localStorage.setItem("@MODULE", loggeduser.data.user.course_module);

      toast.success("Bem-vindo!");
      navigate("/dashboard");
    } catch (error) {
      toast.error("Dados inválidos");
    }
  };

  return (
    <header>
      <StyledHeaderLogin>
        <h1>Kenzie Hub</h1>
        <main>
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(login)}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                placeholder="joao@mail.com.br"
                {...register("email")}
              />
              <span>{errors.email && errors.email.message}</span>
              <label htmlFor="password">Senha</label>
              <input
                type="password"
                id="password"
                placeholder="Digite a sua senha"
                {...register("password")}
              />
              <span>{errors.password && errors.password.message}</span>
              <button type="submit">Entrar</button>
              <p>Ainda não possui uma conta?</p>
            </form>
            <div>
              <button onClick={createLogin} type="button">
                Cadastre-se
              </button>
            </div>
          </div>
        </main>
      </StyledHeaderLogin>
    </header>
  );
};

export default LoginPage;
