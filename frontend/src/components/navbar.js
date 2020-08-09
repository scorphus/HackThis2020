import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

import "bootstrap/dist/css/bootstrap.min.css";

const Styles = styled.div`
  .navbar { background-color: #636D73; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #FFFFFF;
    &:hover { color: black; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: black; }
  }
  .navbar-logo {
      left: 50px;
      top: 25px;
  }
  .sign-up-button {
      position: absolute !important;
    left: 50%;
}
  .mr-auto {
      font-size: 1.7em;
  }
  .mr-auto2 {
    font-size: 1.7em;
}
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar collapseOnSelect expand="lg">
      <Navbar.Brand className="navbar-logo" href="/">
        <img
          src="https://i.kym-cdn.com/entries/icons/original/000/017/318/angry_pepe.jpg"
          width="100"
          height="100"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Brand className="sign-up-button" href="/signup">
        <button type="button">
            Sign Up!
        </button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/profile">Profile</Nav.Link>
        </Nav>
        <Nav className="mr-auto2">
          <Nav.Link href="/faq">FAQ</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)