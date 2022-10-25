import React, { useContext } from 'react';
import { Button, Image, OverlayTrigger, Tooltip } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import image from '../../assets/logo2.png'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    // console.log(user)
    // log Out from site handle event
    const handleLogOut = () => {
        logOut()
        .then( () =>{ })
        .catch( error => console.error("Error", error));
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >
                        <Image className='me-3'
                            roundedCircle
                            style={{height: "40px", width: "40px"}}
                            src={image}
                            data-bs-toggle="tooltip" 
                            data-bs-placement="bottom" 
                            data-bs-title={user?.displayName}
                        ></Image>
                        Basic IT
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav className='me-3 '><Link to='/courses'>Courses</Link></Nav>
                        <Nav className='me-3'><Link to='/blog'>Blog</Link></Nav>
                        <Nav className='me-3'><Link to='/faq'>FAQ</Link></Nav>
                        
                    </Nav>
                    <Nav>
                    <div>
                            {
                                user?.uid ?
                                <>
                                    <Button onClick={handleLogOut} variant='outline-light' className='mx-3'>Log Out</Button>
                                </>
                                :
                                <>
                                    <Link className='me-3' to="/login">Login</Link>
                                    <Link  className='me-3' to="/register">Register</Link>
                                </>
                            }
                        </div>
                        <div>
                            <Link to="/profile">
                                {
                                    user?.photoURL  ?
                                        <Image
                                        roundedCircle
                                        style={{height: "35px", width: "35px"}}
                                        src={user?.photoURL}
                                    ></Image>
                                    : 
                                    <FaUser className='w-4'></FaUser>
                                }
                            </Link>
                        </div>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;