import React, { useState } from "react";
import styled from "styled-components";
import { Layout } from "components/layout";
import { AuthApi } from "services";
import { login } from "utils/auth";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginForm = styled.form`
  margin: 20px auto;
  width: 40%;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState(false);

  const onSubmit = async e => {
    e.preventDefault();
    setIsError(false);
    try {
      const api = new AuthApi();
      api.setup();
      const response = await api.login(username, password);

      if (response.kind === "ok") {
        const { token } = response;
        login(token);
      } else {
        setIsError(true);
      }
    } catch (err) {
      setIsError(true);
    }
  };

  return (
    <Layout>
      <Container className="col-12">
        <LoginForm onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              className="form-control"
              required
              onChange={e => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              required
              type="password"
              className="form-control"
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary float-right">
              Login
            </button>
          </div>
        </LoginForm>
        {isError && (
          <div className="mt-4 alert alert-danger" role="alert">
            There's an error while login, please try again!
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default Login;
