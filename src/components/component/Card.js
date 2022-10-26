import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import { Anchor, Card } from 'react-bootstrap';
import React from "react";

const CardBerita = (props) => (
  <Card className='card-news border-0 shadow-art rounded-custom mb-4 mx-auto' style={{ width: '16rem' }}>
    <Card.Img className='card-image-news' variant="top" src={props.image} />
    <p className='position-absolute card-kategori text-white'>{props.category}</p>
    <Card.Body>
      <Card.Title><p>{props.title}</p></Card.Title>
      <Card.Text>
        {props.description}
      </Card.Text>
      <Anchor href={props.url} className='float-end'><small>Baca Selengkapnya</small></Anchor>
    </Card.Body>
  </Card>
);

export default CardBerita;