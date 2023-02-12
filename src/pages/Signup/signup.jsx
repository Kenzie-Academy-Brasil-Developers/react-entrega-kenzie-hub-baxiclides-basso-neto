import { StyledSignUpPageHeader, StyledSignUpPageMain } from "./signupstyle";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useState } from "react";

const formSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "A senha deve ter pelo menos 8 caracteres, incluindo letras, números e um símbolo"
    ),
  confirm: yup
    .string()
    .required("confirmar a senha")
    .oneOf([yup.ref("password"), null], "As senhas não correspondem"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),

  course_module: yup.string().required("Campo obrigatório"),
});

const SignUpPage = () => {
  const [disable, setDisable] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmitFunction = async (data) => {
    delete data.confirm;

    try {
      await api.post("users", data);
      toast.success("Cadastrado com sucesso");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Tente novamente");
    } finally {
      setDisable(true);
    }
  };

  return (
    <>
      <StyledSignUpPageHeader>
        <div>
          <h1>Kenzie Hub</h1>
          <button onClick={()=>{navigate('/')}} >Voltar</button>
        </div>
      </StyledSignUpPageHeader>

      <StyledSignUpPageMain>
        <div>
          <h2>Crie a sua conta</h2>
          <h5>Rápido e grátis, vamos nessa</h5>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              type="text"
              placeholder="Digite aqui seu nome"
              {...register("name")}
            />
            <p>{errors.name && errors.name.message}</p>
            <label htmlFor="Email">Email</label>
            <input
              id="Email"
              type="text"
              placeholder="Digite aqui seu email"
              {...register("email")}
            />
            <p>{errors.email && errors.email.message}</p>
            <label htmlFor="password">Senha</label>
            <input
              id="password"
              type="password"
              placeholder="Digite aqui sua senha"
              {...register("password")}
            />
            <p>{errors.password && errors.password.message}</p>
            <label htmlFor="confirm">Confirmar Senha</label>
            <input
              id="confirm"
              type="password"
              placeholder="Digite novamente sua senha"
              {...register("confirm")}
            />
            <p>{errors.confirmar && errors.confirmar.message}</p>
            <label htmlFor="Bio">Bio</label>
            <input
              id="Bio"
              type="text"
              placeholder="Fale sobre você"
              {...register("bio")}
            />
            <p>{errors.bio && errors.bio.message}</p>
            <label htmlFor="Contato">Contato</label>
            <input
              id="Contato"
              type="text"
              placeholder="Opção de contato"
              {...register("contact")}
            />
            <p>{errors.contact && errors.contact.message}</p>
            <label htmlFor="modulo">Selecionar módulo</label>
            <select name="modulo" id="modulo" {...register("course_module")}>
              <option value="Primeiro Módulo">
                Primeiro Módulo - Introducação ao Frontend
              </option>
              <option value="Segundo Módulo - JavaScript Avançado">Segundo Módulo - JavaScript Avançado</option>
              <option value="Terceiro Módulo - Introdução ao ReactJS">Terceiro Módulo - Introdução ao ReactJS</option>
              <option value="Quarto Módulo - React Avançado">Quarto Módulo - React Avançado</option>
            </select>
            <button type="submit" onClick={() => setDisable(true)}>
              Cadastrar
            </button>
          </form>
        </div>
      </StyledSignUpPageMain>
    </>
  );
};

export default SignUpPage;
