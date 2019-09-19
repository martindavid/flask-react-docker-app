import * as React from "react";
import { Collapse } from "../collapse";
import Link from "next/link";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("../menu"), { ssr: false });

interface HeaderState {
  showMenu: boolean;
}

const initialState = {
  showMenu: false
};

export class Header extends React.Component<{}, HeaderState> {
  readonly state: HeaderState = initialState;

  toggleMenu = () => {
    this.setState({ showMenu: !this.state.showMenu });
  };

  menuOnClick = () => {
    this.setState({ showMenu: false });
  };

  render() {
    return (
      <header className="bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
            <Link href="/">
              <a className="navbar-brand" href="/">
                <img
                  src="/static/images/logo.svg"
                  className="img-fluid logo"
                  alt="Passporr"
                />
              </a>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded={this.state.showMenu}
              aria-label="Toggle navigation"
              onClick={this.toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <Collapse navbar show={this.state.showMenu}>
              <Menu menuOnClick={this.menuOnClick} />
            </Collapse>
          </nav>
        </div>
      </header>
    );
  }
}
