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
`;

export const FiveHundredError = () => {
  return (
    <Container>
      <div>
        <button className="error-code">
          <div className="number five">
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
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>

            <div className="cell empty"></div>
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

            <div className="cell empty"></div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell filled">
              <div className="bug"></div>
            </div>
            <div className="cell empty"></div>
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
        </button>
      </div>
      <br />
      <div>
        <Link href="/" passHref>
          <a className="btn btn-tomato">Go back to Home</a>
        </Link>
      </div>
    </Container>
  );
};
