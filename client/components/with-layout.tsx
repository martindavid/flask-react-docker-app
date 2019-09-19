import * as React from "react";
import { Header, Footer } from "./layout";
import { ErrorBoundary } from "./error-boundary";

const getDisplayName = Component =>
  Component.displayName || Component.name || "Component";

export default Component =>
  class WithLayout extends React.Component {
    // Gets the display name of a JSX component for dev tools

    static displayName = `withLayout(${getDisplayName(Component)})`;

    static async getInitialProps(args) {
      return Component.getInitialProps
        ? await Component.getInitialProps({ ...args })
        : {};
    }

    render() {
      return (
        <>
          <Header />
          <ErrorBoundary>
            <main>
              <Component {...this.props} />
            </main>
          </ErrorBoundary>
          <Footer />
        </>
      );
    }
  };
