import React, { useRef } from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import { Form } from "@unform/web";
import logo from "../../Assets/logo.svg";
import Input from "../../components/input";
import * as Yup from "yup";
import { useContextAutenticacao } from "../../context/autenticacao";
// import { Link, useHistory } from "react-router-dom";

function Register() {
  const formularioReferencia = useRef(null);
  const { login } = useContextAutenticacao();

  const submeterFormulario = async (data) => {
    console.log(data);

    //Valida dos campos do formulário
    try {
      const esquema = Yup.object().shape({
        email: Yup.string()
          .email("Email inválido")
          .required("Você precisa digitar um email"),
        senha: Yup.string()
          .min(6, "A senha precisa ter no mínimo 6 caracteres")
          .required("Você precisa digitar uma senha"),
      });
      await esquema.validate(data, { abortEarly: false });
      login(data);

      //Faz a requisição da api e grava no banco de dados
      //ATENÇÃO
      // const reponse = await api.post("login", {
      //   email: data.email,
      //   senha: data.senha,
      // });
      // console.log(reponse.data);
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const erros = {};
        error.inner.forEach((e) => {
          erros[e.path] = e.message;
        });
        console.log(erros);
        formularioReferencia.current?.setErrors(erros);
      }
    }
  };
  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>
      <ContentForm>
        <h1 className="title">Bem vindo de volta!</h1>
        <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
          <p>Preencha seus dados para realizar seu login</p>

          <h2>Email</h2>
          <Input name="email" type="text" placeholder="exemplo@gmail.com" />
          <h2>Senha</h2>
          <Input name="senha" type="password" placeholder="Senha" />
          <button type="submit"> Login </button>
          {/* <Link to="/login">
            Ja possuo uma conta
            <FiUpload />
          </Link> */}
          <a className="loginButton" href="#">
            {" "}
            não possui uma conta? cadastre-se
          </a>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Register;
