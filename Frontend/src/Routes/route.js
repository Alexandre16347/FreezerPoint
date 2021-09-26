import React from "react";
import { Route, Redirect } from "react-routes-dom";

function ControleDeRotas({ isPrivate = false, component: Component, ...rest }) {
  const usuario = localStorage.getItem("@aplicacao:usuario");
  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!usuario ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "Home",
            }}
          />
        );
      }}
    ></Route>
  );
}
