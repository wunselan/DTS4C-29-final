import { Card, Col, Container, Row, Anchor,Form } from "react-bootstrap"
import CardBerita from "../../components/component/Card"
import { Footer } from "../../components/component/Footer"
import { Header } from "../../components/component/Header"
import Masonry from 'react-masonry-css'
import api from '../../apiClient'
import { useEffect, useState } from "react"
import Button from '../../components/component/Button'

export const NewsPage = () => {

    const [search, setSearch] = useState('');
    const [kategori, setKategori] = useState('');
    // Search field.
    const inputSearch = (e) => {
        setSearch(e.target.value);
    }

    const changeKategori = (e) => {
        setKategori(e.target.value);
        api.GetNews(search, e.target.value)
        .then(res => {
            setContent(res);
            return;
        });
    }

    const onFilter = (e) => {
        e.preventDefault();
        api.GetNews(search, kategori)
        .then(res => {
            setContent(res);
            return;
        });
    }

    const [content, setContent] = useState(null)
    useEffect(() => {
        api.GetNews()
        .then(res => {
            setContent(res);
            return;
        });
    }, [])

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };

    // console.log(content.data.pagination.count)
    
    return (
        <>
        <Header />
        <div className='title-news bg-dark pt-page d-flex flex-column text-center'>
            <h3 className='text-light fw-bolder'>
                Daftar Berita
            </h3>
        </div>
        <Container className='min-page min-margin-top'>
            <Card className="rounded-custom shadow-art p-lg-5 p-1 min-card-page">
                <Card.Body>
                    <Row>
                        <Col xl={4}>
                            <Card className="rounded-custom shadow-art p-2 mb-3">
                                <Card.Body>
                                    <h5 className="card-title d-inline">Filter</h5>
                                    <Anchor className="float-end" href="/news"><small>Reset</small></Anchor>
                                    <Form.Group className="my-3">
                                        <Form.Label>Kategori</Form.Label>
                                        <Form.Select aria-label="kategori" onChange={changeKategori}>
                                            <option></option>
                                            <option value="general">General</option>
                                            <option value="business">Business</option>
                                            <option value="entertainment">Entertainment</option>
                                            <option value="health">Health</option>
                                            <option value="science">Science</option>
                                            <option value="sports">Sports</option>
                                            <option value="technology">Technology</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xl={8}>
                            <Row>
                                <div className="d-inline-flex px-2 mb-4 bd-highlight flex-row-reverse">
                                    <div className="search">
                                        <Form.Control className="shadow-art" type="input" onChange={inputSearch} value={search}/>
                                        <Button title='Search' layout='float-end' type='submit' handleClick={onFilter} />
                                    </div>
                                </div>
                            </Row>
                            <Masonry
                            breakpointCols={breakpointColumnsObj}
                            className="my-masonry-grid justify-content-center"
                            columnClassName="my-masonry-grid_column"
                            >   
                                {
                                    content && content.data && content.data.data.map(c => {
                                       return <CardBerita title={c.title} image={c.image} category={c.category} description={c.description} url={c.url}  />
                                    })
                                }
                               
                            </Masonry>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Container>
        <Footer />
        </>
    )
}