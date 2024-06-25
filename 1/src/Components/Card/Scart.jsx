import React from 'react';
import'./Scart1.css'
import { Button, Card, ListGroup } from 'react-bootstrap';

const Scart = () => {
    return (
        <div className='case'>
                        <Card style={{ width: 'holder.js18rem' }}>
      <Card.Img variant="top" src="ns2.png" />
      <Card.Body class="cbg">
        <Card.Title class="p4">Shirt Shop</Card.Title>
        <Card.Text class="tc">
        Discover ultimate comfort and timeless style with our Classic Comfort Shirt. Crafted from premium, breathable cotton blend, it offers a perfect fit and versatile design for any occasion. Durable construction ensures long-lasting wear. Elevate your wardrobe with this essential staple.
        </Card.Text>
      </Card.Body>
      
      <Card.Body class="cbg">
        <Card.Link href="#">See Details</Card.Link>
        <Card.Link href="#">Order Now</Card.Link>
      </Card.Body>
    </Card>

        </div>
    );
};

export default Scart;