import React, { useState } from 'react';

import {Container, Nav, Navbar, Button} from 'react-bootstrap';

import { Link } from "react-router-dom"

import ModalRegister from './auth/ModalRegister';

import logo from '../assets/logo.png'

function Navbarz() {

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  
  return (
    <Navbar 
      bg="white" 
      expand="lg"
      className="shadow-sm p-3 mb-5 bg-white rounded">
      <Container>
        <Navbar.Brand as={Link} to="/">
        <img
              src={logo}
              alt="logo"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/" className='text-black' >Home</Nav.Link>
            <Nav.Link as={Link} to="/article" className='text-black' >Article</Nav.Link>
            <Nav.Link as={Link} to="/create" className='text-black'>Create</Nav.Link>
          </Nav>
            <Button 
              className='bg-white border-0 text-primary'
              onClick={handleShow} >
              Login
            </Button>
            <ModalRegister handleClose={handleClose} show={show} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarz;