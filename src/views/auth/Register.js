import React, { Card, Form, Row, Col, Container } from 'react-bootstrap';
import '../../assets/style.css';
import newsLogo from '../../assets/img/art-logo.png';
import { useState, useEffect } from 'react';
import Button from '../../components/component/Button.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../../apiClient/firebaseConfig';
import { Toast } from '../../components/component/Toast';
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../../apiClient/authCheck';

export const RegisterPage = () => {
    
    // Initiate
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Check jika sudah login maka langsung ke home
    useEffect(() => {
        const isLogin = isLoggedIn();
        if ( isLogin ) navigate('/');
    }, [])
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cPassword, setcPassword] = useState('');
      
    // Email field.
    const inputEmail = (e) => {
        setEmail(e.target.value);
    }
  
    // Password field.
    const inputPassword = (e) => {
        setPassword(e.target.value)
    }

    // Confirm Password field.
    const inputcPassword = (e) => {
        setcPassword(e.target.value)
    }
  
    const onSubmit = (e) => {
        e.preventDefault();
        if ( password != cPassword ) {
            setPassword('');
            setcPassword('');
            Toast.fire({
                icon: 'error',
                title: 'Confirm Password didn\'t match'
            })
            return false;
        }

        const submittedData = {
            email: email,
            password: password
        }

        createUserWithEmailAndPassword(auth, submittedData.email, submittedData.password)
            .then((userCredential) => {
                // Signed out
                signOut(auth);
                dispatch({type: 'regis'});
                navigate('/login');
            })
            .catch((error) => {
                setEmail('');
                setPassword('');
                setcPassword('');
                Toast.fire({
                    icon: 'error',
                    title: error
                })
            });
    }
    
    return (
      <Container fluid>
          <Row className='min-height-custom'>
              <Col className='bg-login d-none d-sm-none d-lg-block px-0' sm={12} lg={6}>
              <div className='layer-login d-flex'>
                  <img className='m-auto' src={newsLogo} alt="Art Project Logo" style={{ width: '40%' }} />
              </div>
              </Col>
              <Col className='my-auto p-5 form-login' sm={12} lg={6}>
                <img className='mx-auto mb-4 d-block d-sm-block d-lg-none' src={newsLogo} alt="Art Project Logo" style={{ width: '40%' }} />
                <h1 className='fw-bold'>Daftar WP News</h1>
                <h5 className='mb-3'>Daftarkan diri anda agar dapat melihat berita-berita eksklusif!</h5>
                <Form>
                    <Form.Group className="mb-3" controlId="form-input">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="input" onChange={inputEmail} value={email} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form-password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" onChange={inputPassword} value={password} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="form-cPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" onChange={inputcPassword} value={cPassword} />
                    </Form.Group>
                    <div><small>Sudah memiliki akun? silahkan <Link to="/login">masuk</Link></small></div>
                    <Button title='Daftar' layout='float-end' type='submit' handleClick={onSubmit} /> 
                </Form>
              </Col>
          </Row>
      </Container>
    )
}