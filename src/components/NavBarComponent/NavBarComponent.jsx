import React from "react";
import {Link} from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import {getAllCategories} from "../../services/products";

import "./NavBarComponent.css";
import {NavDropdown} from "react-bootstrap";

const NavBarComponent = () => {
  const [categories, setCategories] = React.useState([]);

  React.useEffect(() => {
    getAllCategories()
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
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
            <NavDropdown
              className="link-navbar"
              title="Categorias"
              id="basic-nav-dropdown"
            >
              {categories.map((category) => {
                return (
                  <NavDropdown.Item key={category.slug}>
                    <Link to={`/category/${category.slug}`}>
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
