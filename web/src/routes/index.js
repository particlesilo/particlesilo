import React from "react";
import { Switch, Route } from "react-router-dom";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { Login } from "../components/Login";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import { TopicPage } from "../components/Topics/TopicPage";
// import { Upload } from "../components/Upload";


export default function routes() {
  return (
    <Navbar>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/topic/:id" children={<TopicPage />} />
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </Navbar>
  );
}
