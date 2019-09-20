import React, { useState } from "react";
import { Collapse, Navbar, NavbarToggler, NavbarBrand } from "reactstrap";
import { Menu } from "./menu";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Flask/NextJs App</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Menu />
        </Collapse>
      </Navbar>
    </div>
  );
};
