import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import CreatePage from "../Pages/CreatePage/CreatePage";
import MainContextProvider from "../Contexts/MainContext";
import EditPage from "../Pages/EditPage/EditPage";

const Routes = () => {
  return (
    <MainContextProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={CreatePage} />
          <Route exact path="/edit/:id" component={EditPage} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </MainContextProvider>
  );
};

export default Routes;
