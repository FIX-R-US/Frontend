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
                  <Nav.Link href='#Home'>Home</Nav.Link>
                  <Nav.Link href='#signup'>Sign up</Nav.Link>
                  <Nav.Link href='#contact'>Contact</Nav.Link>
                  <Nav.Link href='#about'>About</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header