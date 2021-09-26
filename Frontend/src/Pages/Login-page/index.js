import React, { useRef } from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import logo from "../../Assets/logo.svg";
import { Form } from "@unform/web";
import Input from "../../components/input";
import App from "../../App";
function Login() {
  const formularioReferencia = useRef(null);
  const submeterFormulario = (data) => {
    console.log(data);
  };
  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>
      <ContentForm>
        <h1 className="title">Bem vindo de volta!</h1>
        <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
          <p>Não tem uma conta? Cadastre-se</p>
          <h2>Login</h2>
          <Input
            name="emailUsuario"
            type="text"
            placeholder="exemplo@gmail.com"
          />
          <h2>Senha</h2>
          <Input name="senhaUsuario" type="password" placeholder="Senha" />
          <a href="#">Esqueceu a senha?</a>
          <button type="submit"> Login</button>
          <p className="separator">
            <span>Crie uma conta</span>
          </p>
          <a className="sign-button" href={App}>
            Cadastre-se
          </a>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Login;
