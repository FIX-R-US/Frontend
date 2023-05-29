import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import {FcEngineering} from 'react-icons/fc'
import './HomePage.css'

function Header() {
  return (
    <div>
        <Navbar bg= 'dark' variant='dark' className='nav--container'>
            <Container className='nav--items'>
                <Navbar.Brand className='nav--brand'>
                    <FcEngineering size={40}/> 
                    <h2>FIX-R-US</h2>
                </Navbar.Brand>
                <Nav>
                  <Nav.Link href='#Home' className='nav--text'>Home</Nav.Link>
                  <Nav.Link href='#signup' className='nav--text'>Sign up</Nav.Link>
                  <Nav.Link href='#contact' className='nav--text'>Contact</Nav.Link>
                  <Nav.Link href='#about' className='nav--text'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header