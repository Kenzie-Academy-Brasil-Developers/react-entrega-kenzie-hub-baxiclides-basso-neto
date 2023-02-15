import React from "react";
import { useForm } from "react-hook-form";
import StyledHeaderLogin from "./Loginstyle";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

const formShema = yup.object().shape({
  email: yup.string().required("Email inválido").email("Email inválido"),
  password: yup.string().required("Senha Inválida"),
});

const LoginPage = () => {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formShema),
  });

  const navigate = useNavigate();

  const submit = (formData) => {
    userLogin(formData);
  };

  return (
    <header>
      <StyledHeaderLogin>
        <h1>Kenzie Hub</h1>
        <main>
          <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit(submit)}>
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
              <button type="button" onClick={() => navigate("/signup")}>
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
