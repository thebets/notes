import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import Routes from './Routes';
import { LinkContainer } from 'react-router-bootstrap';

const App = (props) => {
  return (
    <div className='App container'>
      <Navbar bg='light' fluid collapseOnSelect>
          <Navbar.Brand>
            <Link to='/'>Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to='/signup'>
                <Nav.Link>Sign up</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Routes />
    </div>
  );
};

export default App;
