import React from "react";
import GlobalStyle from "./Styles/global";
import Register from "./Pages/Register-page";
import Login from "./Pages/Login-page";
import Home from "./Pages/Home-page";
import RegisterBook from "./Pages/Register-Book";
import { AutenticacaoProvider } from "./context/autenticacao";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes/index";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <AutenticacaoProvider>
          <Routes></Routes>
        </AutenticacaoProvider>
        {/* <Home />
        <Register />
        <RegisterBook /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
