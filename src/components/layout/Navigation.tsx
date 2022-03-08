import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import classes from '../../styles/Navigation.module.css';

const Navigation = () => {
  return (
    <div>
      <Navbar className={classes.NavBar} bg='dark' expand='lg'>
        <Container className={classes.NavContainer}>
          <Navbar.Brand data-testid='app-name' href='/' className={classes.Nav}>
            <i className='fas fa-headphones'></i> iSounds Music
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
