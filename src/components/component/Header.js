import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import newsLogo from '../../assets/img/art-logo.png';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope, faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { Toast } from './Toast';
import { auth } from '../../apiClient/firebaseConfig';
import { isLoggedIn, userData } from '../../apiClient/authCheck';

export const Header = () => {

    // Get user login
    let user;
    const isLogin = isLoggedIn();
    if ( isLogin ) {
        user = userData().email;
    }

    // Initiate
    const navigate = useNavigate();
    const Logout = (e) => {
        signOut(auth).then(() => {
            localStorage.removeItem('token');
            navigate('/login');
          }).catch((error) => {
            Toast.fire({
                icon: 'error',
                title: error
            })
          });
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container fluid className='py-1 d-block'>
                    <Row className='justify-content-between text-center'>
                        <Col sm={12} lg={4} className="my-auto pb-2 pb-lg-0 d-none d-lg-block d-xl-block">
                            <small><FontAwesomeIcon icon={faPhone} />&nbsp; +62 812 3456 7891 &nbsp;|&nbsp; <FontAwesomeIcon icon={faEnvelope} />&nbsp; helpdesk@wp.com</small>
                        </Col>
                        <Col sm={12} lg={4} className="my-auto pb-2 pb-lg-0">
                            <Navbar.Brand href="/" className='fw-bold'>
                            <img className='m-auto me-2' src={newsLogo} alt="News Logo" style={{ width: '10%' }} />
                            </Navbar.Brand>
                        </Col>
                        <Col sm={12} lg={4} className="my-auto pb-2 pb-lg-0">
                            <NavDropdown title={user} id="collasible-nav-dropdown" className='btn btn-outline-art px-5 rounded-pill profile-drop'>
                                <NavDropdown.Item onClick={Logout}><small><FontAwesomeIcon icon={faRightFromBracket} />&nbsp; Logout</small></NavDropdown.Item>
                            </NavDropdown>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <Container>
                <Navbar bg="light" expand="lg" className='mt-2 py-3 rounded-custom position-absolute-center gap-3 child-nav'>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className='text-center'>
                        <Nav className="mx-auto gap-4">
                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="/news">Daftar Berita</Nav.Link>
                            <Nav.Link href="/tentang-kami">Tentang WP News</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </div>
    );
}