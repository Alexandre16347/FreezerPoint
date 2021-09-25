import React, { useRef } from "react";
import { Container, ContentForm, Image, Page } from "./styles";
import logo from "../../Assets/logo.svg";
import {Form} from "@unform/web"
import Input from "../../components/input";

function RegisterBook() {
  
  const formularioReferencia = useRef(null)

  const submeterFormulario = (data) =>{
    console.log(data);
  }

  return (
    <Page>
    <div className= "logo">
        <img src={logo} alt="logo" />
      </div>

    <Container>
      <ContentForm>
        <h1 className="title">Cadastre um livro</h1>
        <Form ref= {formularioReferencia} onSubmit= {submeterFormulario}>
          <h2>Título</h2>
          <Input name= "nome" type="text" placeholder="Harry Potter" />
          <h2>Autor</h2>
          <Input name= "autor" type="text" placeholder= "J. K. Rowling"/>
          <h2>Categoria</h2>
          <Input name= "categoria" type="text" placeholder="Livro" />
          <h2>Gênero</h2>
          <Input name= "genero" type="text" placeholder="Fantasia" />
          <h2>Edição</h2>
          <Input name= "edicao" type="number" placeholder="2008" />
          <h2>Sinopse</h2>
          <Input name= "sinopse" type= "text" placeholder= "Uma breve descrição sobre o livro"></Input>

          <button type="submit"> Cadastrar </button>
        </Form>
      </ContentForm>
      <Image> </Image>
    </Container>
    </Page>
  );
}

export default RegisterBook;
