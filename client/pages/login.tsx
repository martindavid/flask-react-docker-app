import React, { Component } from "react";
import styled from "styled-components";
import { withRouter, SingletonRouter } from "next/router";
import { Layout } from "components/layout";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginForm = styled.form`
  margin: 20px auto;
  width: 40%;
`;

type LoginProps = {
  router: SingletonRouter;
};

type LoginState = {
  username: string;
  password: string;
};

class Login extends Component<LoginProps, LoginState> {
  state = {
    username: "",
    password: ""
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("Login");
  };

  render() {
    return (
      <Layout>
        <Container className="col-12">
          <LoginForm onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                name="username"
                type="text"
                className="form-control"
                required
                onChange={e => {
                  this.setState({ username: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                required
                type="password"
                className="form-control"
                onChange={e => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <button type="submit" className="btn btn-primary float-right">
              Login
            </button>
          </LoginForm>
        </Container>
      </Layout>
    );
  }
}

export default withRouter(Login);
