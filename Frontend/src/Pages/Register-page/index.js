import React, { useRef } from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import { Form } from "@unform/web";
import logo from "../../Assets/logo.svg";
import Input from "../../components/input";
import api from "../../services/api";

function Register() {
  const formularioReferencia = useRef(null);
  const submeterFormulario = async (data) => {
    console.log(data);
    const reponse = await api.post("createUsuario", {
      nome: data.nome,
      email: data.email,
      senha: data.senha,
    });
    console.log(reponse.data);
  };
  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>
      <ContentForm>
        <h1 className="title">Bem vindo de volta!</h1>
        <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
          <p>Preencha seus dados para cadastrar</p>
          <h2>Nome</h2>
          <Input name="nome" type="text" placeholder="Nome" />
          <h2>Email</h2>
          <Input name="email" type="text" placeholder="exemplo@gmail.com" />
          <h2>Senha</h2>
          <Input
            name="senha"
            type="password"
            placeholder="Senha"
            color="#9BA0FC"
          />
          <button type="submit"> Cadastre-se </button>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Register;
