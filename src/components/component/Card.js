import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/style.css';
import { Anchor, Card, OverlayTrigger, Tooltip } from 'react-bootstrap';
import React from "react";

const CardBerita = (props) => (
  <Card className='card-news border-0 shadow-art rounded-custom mb-4 mx-auto' style={{ width: props.size }}>
    <Card.Img className='card-image-news' variant="top" src={props.image} />
    <p className='position-absolute card-kategori text-white'>{props.category}</p>
    <Card.Body>
      <Card.Title>
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={<Tooltip id="button-tooltip-2">{props.title}</Tooltip>}
        >
        <p>{props.title.split(' ').slice(0,3).join(' ')+' ...'}</p>
        </OverlayTrigger>
      </Card.Title>
      <Card.Text>
        {props.description.split(' ').slice(0,15).join(' ')+' ...'}
      </Card.Text>
      <Anchor href={props.url} className='float-end'><small>Baca Selengkapnya</small></Anchor>
    </Card.Body>
  </Card>
);

export default CardBerita;