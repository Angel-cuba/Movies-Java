import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <FontAwesomeIcon icon={faVideoSlash} color="#FDD719" />
          <span className="ms-2" style={{color:"#FFD500CC"}}>Gold</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <NavLink className="nav-link" as={NavLink} to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" as={NavLink} to="/movies">
              Movies
            </NavLink>
            <NavLink className="nav-link" as={NavLink} to="/tv-shows">
              TV Shows
            </NavLink>
          </Nav>
          <Nav>
            <Button variant="outline-info">Login</Button>
            <Button variant="outline-info" className="ms-2">
              Sign Up
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
