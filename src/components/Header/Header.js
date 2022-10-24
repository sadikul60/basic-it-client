import React from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import image from '../../assets/logo2.png'
const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Image className='me-3'
                            roundedCircle
                            style={{height: "40px", width: "40px"}}
                            src={image}
                        ></Image>
                        Basic IT
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        
                    </Nav>
                    <Nav>
                    <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                    <Nav.Link><Link to='/login'>Login</Link></Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;