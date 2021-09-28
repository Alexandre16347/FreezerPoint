import React from "react";
import { Switch } from "react-router-dom";
import Login from "../Pages/Login-page";
import Register from "../Pages/Register-page";
import Home from "../Pages/Home-page";
import Book from "../Pages/Register-Book";
import ControleRotas from "./route";

// import ControleDeRotas from "./route";

function Routes() {
  return (
    <Switch>
      <ControleRotas path="/" exact component={Login}></ControleRotas>
      <ControleRotas path="/login" exact component={Login}></ControleRotas>
      <ControleRotas path="/createUsuario" component={Register}></ControleRotas>
      <ControleRotas
        path="/Home"
        isPrivate={true}
        exact
        component={Home}
      ></ControleRotas>
      <ControleRotas
        path="/createLivro"
        isPrivate={true}
        component={Book}
      ></ControleRotas>
    </Switch>
  );
}

export default Routes;
