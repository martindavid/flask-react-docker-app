import React from "react";
import { withAuthSync } from "utils/auth";
import { Layout } from "components/layout";
import nextCookie from "next-cookies";
import Router from "next/router";
import { UserApi } from "services";

const Profile = props => {
  const { userData } = props;
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <h1>Profile</h1>
          <div>
            <div>Id: {userData.id}</div>
            <div>Username: {userData.username}</div>
            <div>Email: {userData.email}</div>
            <div>Is admin: {userData.admin ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

Profile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);

  const redirectOnError = () => {
    if (typeof window !== "undefined") {
      Router.push("/login");
    } else {
      ctx.res.writeHead(302, { Location: "/login" });
      ctx.res.end();
    }
  };

  try {
    const api = new UserApi();
    api.setup();
    const response = await api.getUserById(token);

    if (response.kind === "ok") {
      const userData = response.user;
      return { userData };
    } else {
      return redirectOnError();
    }
  } catch (err) {
    return redirectOnError();
  }
};

export default withAuthSync(Profile);
