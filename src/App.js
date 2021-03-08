import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./components/notFound";
import StoryDetail from "./components/storyDetail";
import Home from "./components/home";
import LoginForm from "./components/loginForm";

const App = () => {
  return (
    <div className="">
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/stories/:id" component={StoryDetail} />
        <Route path="/stories" component={Home} />
        <Redirect from="/" exact to="/login" />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
};

export default App;
