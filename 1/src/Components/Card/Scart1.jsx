import React, { useState } from 'react';
import './Scart1.css';
import { Card, Button } from 'react-bootstrap';

const Scart1 = () => {
   
    const [currentImage, setCurrentImage] = useState('wnew1.png'); 
  
    const changeImage = (newImage) => {
        setCurrentImage(newImage);
    };

    return (
        <div className='sty'>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={currentImage} alt="Watch Image"/>
                <Card.Body class="cbg">
                    <Card.Title class="p4">Watch Shop</Card.Title>
                    <Card.Text class="tc">
                        Discover our exquisite collection of watches, meticulously crafted to blend elegance and functionality. Our range features timeless designs for every style, from classic to contemporary. Each watch boasts precision engineering and premium materials.
                    </Card.Text>
                </Card.Body>
                <Card.Body class="cbg">
                    <Card.Link href="#">See Details</Card.Link>
                    <Card.Link href="#">Order Now</Card.Link>
                </Card.Body>
                <Card.Body class="cbg">
                    <Button onClick={() => changeImage('cw.png')}>Classic</Button>
                    <Button onClick={() => changeImage('watch2.png')}>Modern</Button>
                    <Button onClick={() => changeImage('watch3.png')}>Luxury</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Scart1;
