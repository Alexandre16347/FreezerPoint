import React, { useEffect, useState } from "react";
import { Header, Body, Footer, Container } from "./styles";
import logo from "../../Assets/logoPurple.svg";
import home from "../../Assets/homeImage.svg";
import book from "../../Assets/item1.svg";
import icon from "../../Assets/icon.svg";
import { Link } from "react-router-dom";

async function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/getLivro")
      .then((response) => response.json())
      .then(setData);
  }, []);

  //teste
  if (!data || !data.length)
    return (
      <div>
        <h2>Sem livros por enquanto</h2>
      </div>
    );

  return (
    <>
      <Header>
        <div class="logo">
          <img src={logo} alt="logo da empresa" />
        </div>

        <ul class="menu">
          <li>
            <Link to="/Home">
              <a> Home</a>
            </Link>
          </li>
          <li>
            <Link to="/createLivro"> Cadastrar</Link>
          </li>
          <li>
            <a href="#"> Sobre</a>
          </li>
        </ul>
      </Header>
      <Body>
        <Container>
          <div class="conteudo">
            <h1>O Freezer</h1>
            <p>
              Em nosso site você encontra um livro para todos os gostos. Uma
              grande variedade. Preços acessíveis. Histórias interessantes
            </p>
            <a href="#">Saiba mais</a>
          </div>
          <div class="ilustracao">
            <img src={home} alt="" />
          </div>
        </Container>
        {/* =========== CABEÇALHO DE LIVROS ============ */}
        <div className="cabecalho">
          <h2>Livros disponíveis</h2>
          <ul className="elementos">
            <li>
              {" "}
              <a href="#"> Ficcão</a>
            </li>
            <li>
              {" "}
              <a href="#"> Romance</a>
            </li>
            <li>
              {" "}
              <a href="#"> Drama</a>
            </li>
            <li>
              {" "}
              <a href="#"> Suspense</a>
            </li>
            <li>
              {" "}
              <a href="#"> Terror</a>
            </li>
            <li>
              {" "}
              <a href="#"> Fantasia</a>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="carossel">
            {data.map((item) => {
              const { nome, autor, edicao, sinopse, genero, categoria } = item;
              return (
                <div className="item">
                  <div className="conteudoItem">
                    <img src={book} className="imageItem" />
                    <div className="info">
                      <p className="preco"> R$ 10,00</p>
                      <p className="titulo"> {nome}</p>
                      <p className="autor"> {autor}</p>
                      <div className="botao">
                        <a href="#"> Comprar</a>
                        <img clasname="icon" src={icon} alt="icone fav" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}{" "}
            {/* =========== FECHAMENTO DO MAP ============ */}
          </div>
        </div>
      </Body>
      <Footer>footer</Footer>
    </>
  );
}

export default Home;
