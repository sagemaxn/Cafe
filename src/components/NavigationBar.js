import React from "react";
import { Link, NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import styled from "styled-components";

const Styles = styled.div`
  .navbar {
    background-color: #fffcf0;
    height: 20vh;
    font-family: Gelato Script;
    z-index: 5;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    color: black;
    background-color: #fffcf0;
    font-size: calc(1em + 1vw);
    z-index: 5;
    &:hover {
      color: #7d7a71;
    }
  }
  .navbar-brand {
    font-size: 35px;
    margin-left: 5%;
  }
  #basic-navbar-nav {
    margin-right: 5%;
    margin-left: 5%;
  }
  .ml-auto {
    background: red;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Mojo Cafe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link as={NavLink} to="/" exact>
              Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} to="/menu">
              Menu
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link as={NavLink} to="/contact-us">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
