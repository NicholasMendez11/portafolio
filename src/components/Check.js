import React from 'react';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cards = ({title, logo, description, url}) => {
    return (  
    <Card style={{ width: '18rem', }} className="Cards" bg="dark" text='dark' border=''>
        <Card.Img variant="top" src={logo} />
        <Card.Body className='CardsText'>
        <Card.Title>{title}</Card.Title>
        <Card.Text >
            {description}
        </Card.Text>
        <a href={url} target='blank'> <Button variant="primary"> See </Button></a>
        </Card.Body>
    </Card>

    );
}
 
export default Cards;