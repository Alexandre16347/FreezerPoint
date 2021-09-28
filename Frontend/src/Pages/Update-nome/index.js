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
    //Valida dos campos do formulário
    try {
      const esquema = Yup.object().shape({
        novoNome: Yup.string().required("Você precisa digitar um nome"),
      });
      await esquema.validate(data, { abortEarly: false });

      //Faz a requisição da api e grava no banco de dados
      const response = await api.put("/update", {
        novoNome: data.novoNome,
      });
      //Atuliza a pagina
      window.location.reload();
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
          <Input name="novoNome" type="text" placeholder="Digite seu nome" />
          <div className="contentButton">
            <button to="" type="submit" className="botao">
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
