import React, { useState, useEffect, useRef } from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import logo from "../../Assets/logo.svg";
import editor from "../../Assets/editor.svg";
import left from "../../Assets/left.png";
import api from "../../services/api";
import { Form } from "@unform/web";
import * as Yup from "yup";
import Input from "../../components/input";
import { useContextAutenticacao } from "../../context/autenticacao";

import { Link, useHistory } from "react-router-dom";

function Update() {
  const [loginErro, setLoginErro] = useState(" ");
  const formularioReferencia = useRef(null);
  const { login } = useContextAutenticacao();
  const history = useHistory();

  const submeterFormulario = async (data) => {
    console.log(data);
  };

  //pegando os dados do backend
  const [data, setData] = useState([]);
  useEffect(async () => {
    console.log("teste");
    const response = await api.get("/buscaID");
    setData(response.data);
  }, []);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>

      <ContentForm>
        <Form ref={formularioReferencia} onSubmit={submeterFormulario}>
          <h1 className="title">Perfil</h1>
          <h2>Nome antigo</h2>
          <p className="nome" href="">
            {data.nome}
          </p>
          <h2>Novo nome</h2>
          <Input name="nome" type="text" placeholder="Digite seu nome" />
          <div className="contentButton">
            <button type="submit" className="botao">
              {" "}
              Aplicar Mudanças
            </button>
          </div>
        </Form>
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Update;
