import React from "react";
import Form from "./common/form/form";
import Joi from "joi-browser";
import { checkLogin } from "./../data/users";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {},
    user: {},
    isLogin: false,
  };

  schema = {
    username: Joi.string().required().label("Username"),
    password: Joi.string().required().label("Password"),
  };

  doSubmit = () => {
    const user = checkLogin(this.state.data);
    this.setState({ isLogin: true });

    if (user) {
      this.setState({ user });
      this.props.history.push("/stories");
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderBtn("Login")}
          {this.state.isLogin &&
            !this.state.user.username &&
            this.renderAlert("Incorrect username or password")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
