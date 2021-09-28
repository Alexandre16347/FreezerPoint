import React, { useEffect, useState, useRef } from "react";
import { Container, ContentForm, Image, Logo } from "./styles";
import logo from "../../Assets/logo.svg";
import editor from "../../Assets/editor.svg";
import left from "../../Assets/left.png";
import api from "../../services/api";

import { Link } from "react-router-dom";

function Profile() {
  const [data, setData] = useState([]);
  const referencia = useRef(null);

  useEffect(async () => {
    console.log("teste");
    const response = await api.get("/getLivro");
    console.log(response.data);
    setData(response.data);
  }, []);

  return (
    <Container>
      <Logo>
        <img src={logo} alt="icon" />
      </Logo>

      <ContentForm ref={referencia}>
        {data.map((item) => {
          const { autor, nome, categoria, genero, sinopse } = item;
          return (
            <div>
              <h1 className="title">Perfil</h1>
              <h2>Nome</h2>
              <div className="containerName">
                <p className="nome" href="">
                  {" "}
                  Josevaldo
                </p>
                <div className="icon">
                  <a href="">
                    {" "}
                    <img src={editor} alt="" />
                  </a>
                </div>
              </div>
              <h2>Email</h2>
              <div className="containerEmail">
                <p className="email" href="">
                  {" "}
                  Josevaldo@gmail.com
                </p>
                <div className="icon">
                  <a href="">
                    {" "}
                    <img src={editor} alt="" />
                  </a>
                </div>
              </div>
              <h2 id="tituloSenha">Senha</h2>
              <div className="containerSenha">
                <p className="senha" href="">
                  {" "}
                  sua senha
                </p>
                <div className="icon">
                  <a href="">
                    <img src={editor} alt="" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </ContentForm>
      <Image></Image>
    </Container>
  );
}

export default Profile;
