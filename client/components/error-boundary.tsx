import * as React from "react";
import * as Sentry from "@sentry/browser";

export class ErrorBoundary extends React.Component {
  state = {
    error: null,
    eventId: null
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({ error });
    if (process.env.NODE_ENV !== "development") {
      Sentry.withScope(scope => {
        scope.setExtras(errorInfo);
        const eventId = Sentry.captureException(error);
        this.setState({ eventId });
      });
    }
  }

  render() {
    if (this.state.error) {
      return <div>Error</div>;
    } else {
      return this.props.children;
    }
  }
}
