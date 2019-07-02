import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import Recipe from "./component/Recipe";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
        <Route path="/Recipe" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}
