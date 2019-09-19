import React from "react";
import { ErrorBoundary } from "../error-boundary";
import { Header, Footer } from "components/layout";

export const Layout = props => {
  return (
    <>
      <Header />
      <ErrorBoundary>{props.children}</ErrorBoundary>
      <Footer />
    </>
  );
};
