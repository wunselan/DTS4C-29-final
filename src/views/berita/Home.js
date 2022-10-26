import React, { Card, Form, Row, Col, Container } from 'react-bootstrap';
import '../../assets/style.css';
import { useState, useEffect } from 'react';
import Button from '../../components/component/Button.js';
import CardBerita from '../../components/component/Card.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { Toast } from '../../components/component/Toast';
import { Footer } from '../../components/component/Footer';
import { isLoggedIn } from '../../apiClient/authCheck';
import api from '../../apiClient'

export const HomePage = () => {

    // initiate
    const navigate = useNavigate();

    // Check if not login
    useEffect(() => {
        const isLogin = isLoggedIn();
        if ( !isLogin ) navigate('/login');
    }, [])
    
    // Alert ketika berhasil login
    const state = useSelector((state) => state);
    if ( state.login ) {
        Toast.fire({
        icon: 'success',
        title: 'Login telah berhasil'
        })
    }
    
    const [content, setContent] = useState(null)
    useEffect(() => {
        api.GetLatestNews()
        .then(res => {
            setContent(res);
            return;
        });
    }, [])

    const [contentPopular, setContentPopular] = useState(null)
    useEffect(() => {
        api.GetPopularNews()
        .then(res => {
            setContentPopular(res);
            return;
        });
    }, [])

    return (
        <>
            <Header />
            <div className='jumbotron-page mt-custom'>
                <div className='jumbotron text-white jumbotron-image d-flex'>
                    <div className='text-center m-auto'>
                        <h1 className='fw-bold'>Selamat Datang di WP News</h1>
                        <p className='lead'>Kelas REA4C</p>
                    </div>
                </div>
            </div>    
            <Container>
                <Card className='mt-custom border-0 shadow-art rounded-custom p-2 mb-5'>
                    <Card.Body>
                        <Row className='justify-content-center text-center'>
                            <Col sm={6}>
                                <h3 className='fw-bold'>20</h3>
                                <h4>Berita</h4>
                            </Col>
                            <Col sm={6}>
                                <h3 className='fw-bold'>1</h3>
                                <h4>Pendaftar</h4>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
                <Row className='py-4 my-4'>
                    <Col className='text-center'>
                        <h4 className='fw-bold'>Buatlah berita sekarang juga</h4>
                        <p>Agar pengguna lain dapat melihat berita anda!</p>
                        <Button title='Buat berita' layout='' type='button' />
                    </Col>
                </Row>
                <Row className='py-4 my-4'>
                    <Col className='d-flex' xs={6} sm={3} md={4} lg={2} xl={3}>
                        <div className="berita-terbaru m-auto">
                            <h4 className='fw-bold'>Berita Terbaru</h4>
                            <h5>WP News</h5>
                            <Link to='/news'>Lihat Semua</Link>
                        </div>
                    </Col>
                    {
                        content && content.data && content.data.data.map(c => {
                            return <Col xs={6} sm={3} md={4} lg={2} xl={3}> <CardBerita title={c.title} image={c.image} category={c.category} description={c.description} url={c.url} /> </Col>
                        })
                    }
                </Row>
                <Row className='py-4 my-4'>
                    <Col className='d-flex' xs={6} sm={3} md={4} lg={2} xl={3}>
                        <div className="berita-terbaru m-auto">
                            <h4 className='fw-bold'>Berita Populer</h4>
                            <h5>WP News</h5>
                            <Link to='/news'>Lihat Semua</Link>
                        </div>
                    </Col>
                    {
                        contentPopular && contentPopular.data && contentPopular.data.data.map(c => {
                            return <Col xs={6} sm={3} md={4} lg={2} xl={3}> <CardBerita title={c.title} image={c.image} category={c.category} description={c.description} url={c.url} /> </Col>
                        })
                    }
                </Row>
            </Container>
            
            <Footer />
        </>
    )
}