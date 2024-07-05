import React from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import {useCollectionItems} from "../../hooks/useCollectionItems";

import "./NavBarComponent.css";
import {NavDropdown} from "react-bootstrap";

const NavBarComponent = () => {
  const {items} = useCollectionItems("category");

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
              <Link to="/">Productos</Link>
            </Nav.Link>
            <NavDropdown
              className="link-navbar"
              title="Categorias"
              id="basic-nav-dropdown"
            >
              {items.map((category) => {
                return (
                  <NavDropdown.Item key={category.slug}>
                    <Link
                      style={{
                        color: "#000",
                        fontWeight: "bold",
                      }}
                      to={`/category/${category.slug}`}
                    >
                      {category.name}
                    </Link>
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidgetComponent />
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
