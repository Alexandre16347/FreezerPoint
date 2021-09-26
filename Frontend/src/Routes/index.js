import React from "react";
import { Switch } from "react-router-dom";
import Login from "../Pages/Login-page";
import Register from "../Pages/Register-page";
import Home from "../Pages/Home-page";
import ControleDeRotas from "./route";

function Routes() {
  <Switch>
    <ControleDeRotas path="/" exact component={Login}></ControleDeRotas>
    <ControleDeRotas path="/register" component={Register}></ControleDeRotas>
    <ControleDeRotas
      path="/home"
      isPrivate={true}
      component={Home}
    ></ControleDeRotas>
  </Switch>;
}

export default Routes;
