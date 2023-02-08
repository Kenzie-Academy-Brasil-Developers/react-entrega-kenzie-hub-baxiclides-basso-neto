import { StyledSignUpPageHeader, StyledSignUpPageMain } from "./signupstyle";
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

const SignUpPage = () => {
    const formSchema = yup.object().shape({
        name: yup.string().required('Nome obrigatório'),
        email: yup.string().required('Email obrigatório').email('Email inválido'),
        senha: yup.string().required('Senha obrigatória'),
        confirmar: yup.string().required('Campo obrigatório'),
        bio: yup.string().required('Campo obrigatório'),
        contact: yup.string().required('Campo obrigatório').matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/, 'Telefone inválido'),
        course_module: yup.string().required('Campo obrigatório'),
    })

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    const onSubmitFunction = (data)=> console.log(data)

    console.log(errors)

  return (
    <>
      <StyledSignUpPageHeader>
        <div>
          <h1>Kenzie Hub</h1>
          <button>Voltar</button>
        </div>
      </StyledSignUpPageHeader>

      <StyledSignUpPageMain>
        <div>
          <h2>Crie a sua conta</h2>
          <h5>Rápido e grátis, vamos nessa</h5>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <label htmlFor="name">Nome</label>
            <input type="text" placeholder="Digite aqui seu nome" {...register('name')} />
            {errors.name && errors.name.message}
            <label htmlFor="Email">Email</label>
            <input type="text" placeholder="Digite aqui seu email" {...register('email')}  />
            {errors.email && errors.email.message}
            <label htmlFor="Senha">Senha</label>
            <input type="text" placeholder="Digite aqui sua senha" {...register('senha')} />
            {errors.senha && errors.senha.message}
            <label htmlFor="ConfirmarSenha">Confirmar Senha</label>
            <input type="text" placeholder="Digite novamente sua senha" {...register('confimar')} />
            {errors.confirmar && errors.confirmar.message}
            <label htmlFor="Bio">Bio</label>
            <input type="text" placeholder="Fale sobre você" {...register('bio')} />
            {errors.bio && errors.bio.message}
            <label htmlFor="Contato">Contato</label>
            <input type="text" placeholder="Opção de contato" {...register('contact')} />
            {errors.contact && errors.contact.message}
            <label htmlFor="modulo">Selecionar módulo</label>
            <select name="modulo" id="modulo" {...register('course_module')}>
                <option value="Primeiro Módulo">Primeiro Módulo</option>
                <option value="Segundo Módulo">Segundo Módulo</option>
                <option value="Terceiro Módulo">Segundo Módulo</option>
                <option value="Quarto Módulo">Segundo Módulo</option>
            </select>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </StyledSignUpPageMain>
    </>
  );
};

export default SignUpPage;
