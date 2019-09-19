import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  flex-direction: column;

  .error-code {
    &:after {
      content: "Looks like you are lost!" !important;
    }
  }
`;

export const FourZeroFour = () => {
  return (
    <Container>
      <div>
        <button className="error-code">
          <div className="number four">
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
          </div>
          <div className="number zero">
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>

            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
          </div>
          <div className="number four">
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>

            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
          </div>
        </button>
      </div>
      <br />
      <div style={{ width: "400px", textAlign: "center" }}>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
        <br />
        <Link href="/" passHref>
          <a className="btn btn-tomato mt-4">Back to homepage</a>
        </Link>
      </div>
    </Container>
  );
};
