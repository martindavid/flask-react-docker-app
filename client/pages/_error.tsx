import React from "react";
import { FiveHundredError, FourZeroFour } from "components/errors";

function Error({ statusCode }) {
  if (statusCode === 404) {
    return <FourZeroFour />;
  }
  return <FiveHundredError />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default Error;
