import React, { Card, Form, Row, Col, Container } from 'react-bootstrap';
import '../../assets/style.css';
import newsLogo from '../../assets/img/art-logo.png';
import { useState, useEffect } from 'react';
import Button from '../../components/component/Button.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import api from '../../apiClient';
import { Toast } from '../../components/component/Toast';
import { useDispatch, useSelector } from 'react-redux';
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../apiClient/firebaseConfig';
import { isLoggedIn } from '../../apiClient/authCheck';

export const LoginPage = () => {

  // Initiate
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Check jika sudah login maka langsung ke home
  useEffect(() => {
    const isLogin = isLoggedIn();
    if ( isLogin ) navigate('/');
  }, [])

  // Alert ketika berhasil register
  const state = useSelector((state) => state);
  if ( state.regis ) {
    Toast.fire({
      icon: 'success',
      title: 'Register berhasil, silahkan login'
    })
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Username field.
  const inputEmail = (e) => {
    setEmail(e.target.value);
  }

  // Password field.
  const inputPassword = (e) => {
    setPassword(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      email: email,
      password: password
    }

    signInWithEmailAndPassword(auth, submittedData.email, submittedData.password)
      .then((userCredential) => {
        // Signed in
        localStorage.setItem('token', userCredential.user.accessToken);
        dispatch({type: 'login'});
        navigate('/');
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
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
              <h1 className='fw-bold'>WP News</h1>
              <h5 className='mb-3'>Platform yang dapat membantu anda untuk membaca berita-berita eksklusif!</h5>
              <Form>
                  <Form.Group className="mb-3" controlId="form-input">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="input" onChange={inputEmail} value={email}/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="form-password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={inputPassword} value={password}/>
                  </Form.Group>
                  <div><small>Belum memiliki akun? silahkan <Link to="/register">daftar</Link> terlebih dahulu</small></div>
                  <Button title='Masuk' layout='float-end' type='submit' handleClick={onSubmit} />
              </Form>
            </Col>
        </Row>
    </Container>
  )
}