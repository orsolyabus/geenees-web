import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = props => {

  return (
    <Navbar className="NavBar">
      <Navbar.Brand >Geenees</Navbar.Brand>
      <Nav.Link href="/">log in</Nav.Link>
      <Nav.Link href="/category">Category search</Nav.Link>
    </Navbar>
  );
};

export default NavBar;
