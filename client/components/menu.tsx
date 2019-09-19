import React from "react";
import Link from "./link";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { useStateValue } from "state";
import { logout } from "components/utils/auth";
import { LOGOUT_USER } from "state/reducers/auth";

interface MenuProps {
  menuOnClick: (e: any) => void;
}

const Menu = (props: MenuProps) => {
  const { menuOnClick } = props;

  // @ts-ignore
  const [{ auth }, dispatch] = useStateValue();

  const onLogoutClick = () => {
    dispatch({ type: LOGOUT_USER });
    logout();
  };

  let isAgency = false;
  let isBlog = false;
  if (window !== undefined) {
    isAgency = window.location.pathname === "/cotiza-cursos";
    isBlog = window.location.pathname.includes("/blog");
  }

  return (
    <ul className="navbar-nav ml-auto">
      <Link activeClassName="active" href="/">
        <li className="nav-item">
          <a className="nav-link" href="/" onClick={menuOnClick}>
            Inicio
          </a>
        </li>
      </Link>
      <li className={`nav-item ${isAgency ? "active" : ""}`}>
        <a className="nav-link" href="/cotiza-cursos" onClick={menuOnClick}>
          Cotiza cursos
        </a>
      </li>
      <Link activeClassName="active" href="/calculator">
        <li className="nav-item">
          <a className="nav-link" href="/calculator" onClick={menuOnClick}>
            Calcula costos de vida
          </a>
        </li>
      </Link>
      <Link activeClassName="active" href="/blog">
        <li className={`nav-item ${isBlog ? "active" : ""}`}>
          <a className="nav-link" href="/blog" onClick={menuOnClick}>
            Blog
          </a>
        </li>
      </Link>
      {auth && auth.isLogin && (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
            Admin
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
              <Link href="/admin/search-engine" passHref>
                <a>Search Engine</a>
              </Link>
            </DropdownItem>
            <DropdownItem>
              <a href="#" onClick={onLogoutClick}>
                Logout
              </a>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      )}
    </ul>
  );
};

Menu.displayName = "Menu";

export default Menu;
