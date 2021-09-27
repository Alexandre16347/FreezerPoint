import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../Pages/Login-page";
import Register from "../Pages/Register-page";
import Home from "../Pages/Home-page";
import Book from "../Pages/Register-Book";
// import ControleDeRotas from "./route";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login}></Route>
      <Route path="/login" exact component={Login}></Route>
      <Route path="/createUsuario" component={Register}></Route>
      <Route path="/Home" exact component={Home}></Route>
      <Route path="/createLivro" component={Book}></Route>
    </Switch>
  );
}

export default Routes;
