import React from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";

import "./NavBarComponent.css";

const NavBarComponent = () => {
  return (
    <Navbar expand="lg" className="header">
      <Container>
        <Navbar.Brand className="logo">
          <Link to="/">Té Acompaño</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar">
            <Nav.Link className="link-navbar">
              <Link to="/">Inicio</Link>
            </Nav.Link>
            <Nav.Link href="#productos" className="link-navbar">
              Productos
            </Nav.Link>
            <Nav.Link href="#nosotros" className="link-navbar">
              Nosotros
            </Nav.Link>
            <Nav.Link href="#contacto" className="link-navbar">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;

/* import React from "react";
import "./Navbar.css";

const NavBarComponent = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Té Acompaño
      </a>

      <nav className="navbar">
        <a href="/">inicio</a>
        <a href="/">producto</a>
        <a href="/">nosotros</a>
        <a href="/">contacto</a>
      </nav>
    </header>
  );
};

export default NavBarComponent;
 */
