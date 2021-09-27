import React from "react";
import GlobalStyle from "./Styles/global";
import Register from "./Pages/Register-page";
import Login from "./Pages/Login-page";
import Home from "./Pages/Home-page";
import RegisterBook from "./Pages/Register-Book";
import { AutenticacaoProvider } from "./context/autenticacao";

function App() {
  return (
    <>
      <GlobalStyle />
      <AutenticacaoProvider>
        <Login />
      </AutenticacaoProvider>
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <RegisterBook /> */}
    </>
  );
}

export default App;
