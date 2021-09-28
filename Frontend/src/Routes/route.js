import React from "react";
import { Route, Redirect } from "react-router-dom";

function ControleRotas({ isPrivate = false, component: Component, ...rest }) {
  const usuario = localStorage.getItem("@freezerPoint:usuario");
  return (
    <Route
      {...rest}
      render={() => {
        return isPrivate === !!usuario ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/Home",
            }}
          />
        );
      }}
    ></Route>
  );
}

export default ControleRotas;
