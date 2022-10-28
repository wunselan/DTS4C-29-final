import React, { Card, Form, Row, Col, Container } from 'react-bootstrap';
import '../../assets/style.css';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../../components/component/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from '../../components/component/Footer';
import { isLoggedIn } from '../../apiClient/authCheck';
import imgProfile from '../../assets/img/wunsel.jpg'
import imgProfileDef from '../../assets/img/defaultProfile.jpg'

export const TentangPage = () => {
    // initiate
    const navigate = useNavigate();

    // Check if not login
    useEffect(() => {
        const isLogin = isLoggedIn();
        if ( !isLogin ) navigate('/login');
    }, [])
    
    return (
        <>
            <Header />
                <div className='title-news bg-dark pt-page d-flex flex-column text-center'>
                    <h3 className='text-light fw-bolder'>
                        Tentang Kami
                    </h3>
                </div>
                <Container className='min-page min-margin-top'>
                    <Card className="rounded-custom shadow-art p-lg-5 p-1 min-card-page">
                        <Card.Body>
                            <Row className='mb-5'>
                                <h5 class="mb-3 border-bottom border-1 border-vendor p-2">Tentang Kami</h5>
                                <Col>WP News adalah website yang menyajikan berita-berita ekslusif yang dapat menemani hari-hari anda. Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium repudiandae quae ea laudantium vel, quaerat, commodi eaque cum error sed quis nesciunt sit veniam. Aliquid soluta ratione odit qui, voluptatum velit natus quia rerum consectetur adipisci! Officia aspernatur libero, repellendus nihil, doloremque commodi architecto quasi placeat facilis ut illo nisi.</Col>
                            </Row>
                            <Row>
                                <h5 class="mb-3 border-bottom border-1 border-vendor p-2">Creators</h5>
                                <Col sm={6}>
                                    <Card className='p-1 py-2 shadow-art rounded-custom card-news mb-5'>
                                        <Card.Body>
                                            <div className="text-center">
                                                <img src={imgProfile} width="100" height='100' className="rounded-circle" />
                                            </div>
                                            <div className="text-center mt-3">
                                                <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                                <h5 className="mt-2 mb-0">Wunsel Arto Negoro</h5>
                                                <span>Software Developer</span>
                                                <div className="px-4 mt-1">
                                                    <p>Saya Wunsel Arto Negoro, saya merupakan lulusan Teknik Informatika di Universitas Brawijaya pada tahun 2020. Saya memiliki pengalaman sebagai Programmer Frontend ataupun Backend. Sebagai programmer saya memiliki kelebihan yaitu teliti, analisis yang kuat, menyelesaikan pekerjaan dengan detail dan mampu bekerja secara tim. </p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col sm={6}>
                                    <Card className='p-1 py-2 shadow-art rounded-custom card-news mb-2'>
                                        <Card.Body>
                                            <div className="text-center">
                                                <img src={imgProfileDef} width="100" height='100' className="rounded-circle" />
                                            </div>
                                            <div className="text-center mt-3">
                                                <span className="bg-secondary p-1 px-4 rounded text-white">Pro</span>
                                                <h5 className="mt-2 mb-0">Prima Aulia</h5>
                                                <span>Software Developer</span>
                                                <div className="px-4 mt-1">
                                                    <p>-</p>
                                                </div>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>  
                            </Row>
                        </Card.Body>
                    </Card>
                </Container>
            
            <Footer />
        </>
    )
}