 import React from "react"
 import {Header, Body, Footer, Container} from "./styles"
 import logo from "../../Assets/logoPurple.svg"
 import home from "../../Assets/homeImage.svg"
 import item from "../../Assets/item1.svg"
 import icon from "../../Assets/icon.svg"
 function Home(){
     return (
         <>
        <Header>
            <div class= "logo">
                <img src={logo} alt="logo da empresa" />
            </div>
            
          
            <ul class= "menu">
                <li><a href="#"> Home</a></li>
                <li><a href="#"> Cadastrar</a></li>
                <li><a href="#"> Sobre</a></li>
            </ul>
            
        </Header>
        <Body>
            <Container>
                <div class= "conteudo">
                    <h1>O Freezer</h1>
                    <p>Em nosso site  você encontra um livro para todos os gostos. Uma grande variedade. Preços acessíveis. Histórias interessantes</p>
                    <a href="#">Saiba mais</a>

                </div>
                <div class= "ilustracao">
                    <img src={home} alt="" />
                </div>
            </Container>
            {/* =========== CABEÇALHO DE LIVROS ============ */}
            <div className="cabecalho">
                <h2>
                    Livros disponíveis
                </h2>
                <ul className= "elementos">
                    <li> <a href="#"> Ficcão</a></li>
                    <li> <a href="#"> Romance</a></li>
                    <li> <a href="#"> Drama</a></li>
                    <li> <a href="#"> Suspense</a></li>
                    <li> <a href="#"> Terror</a></li>
                    <li> <a href="#"> Fantasia</a></li>
                </ul>
            </div>

           <div className= "container">
                <div className= "carossel">
                        <div className= "item">
                            <div className= "conteudoItem">
                                <img src={item} className= "imageItem"/>
                                <div className= "info">
                                    <p className= "preco"> R$ 10,00</p>
                                    <p className= "titulo"> Ordem no caos</p>
                                    <p className= "autor"> Zeca Pagodinho</p>
                                    <div className= "botao">
                                        <a href="#"> Comprar</a>
                                        <img clasname= "icon" src={icon} alt= "icone fav" />
                                    </div>

                                </div>
                            </div>
                        </div>
                </div>
           </div>
        </Body>
        <Footer>
            footer
        </Footer>
        </>
     )
 }

 export default Home;