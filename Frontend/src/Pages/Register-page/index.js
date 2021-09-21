import React, {useRef} from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import {Form} from "@unform/web"
import logo from "../../Assets/logo.svg";
import Input from "../../components/input";

function Register() {

  const formularioReferencia = useRef(null)
  const submeterFormulario = (data) => {
    console.log(data);
  }
  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>   
      <ContentForm>
        <h1 className="title">Bem vindo de volta!</h1>
        <Form ref= {formularioReferencia} onSubmit= {submeterFormulario}>
          <p>Preencha seus dados para cadastrar</p>
          <h2>Nome</h2>
          <Input name= "nomeUsuario" type="text" placeholder="Nome" />
          <h2>Email</h2>
          <Input name= "emailUsuario" type="text" placeholder="exemplo@gmail.com" />
          <h2>Senha</h2>
          <Input name= "senhaUsuario" type="password" placeholder="Senha" color="#9BA0FC" />
          <button type="submit"> Cadastre-se </button>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Register;
