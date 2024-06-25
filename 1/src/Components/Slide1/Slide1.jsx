import React from 'react';
import'./Slide1.css'
import { Carousel } from 'react-bootstrap';

const Slide1 = () => {
    return (
        <div id='link1'>
          <h1 class="new">Reviews</h1>
        <div className='styles'>
             <Carousel>
      <Carousel.Item>
      
        <img src='sn1.png'alt=''></img>
       
        <Carousel.Caption>
        <h2><img className="reviewer-img" src='r1.png' alt='John Doe' /></h2>
          <h3>Great Product!</h3>
          <p>This product exceeded my expectations. Highly recommended! - John Doe</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
    
       <img src='ts1.png'alt=''></img>
        <Carousel.Caption>
        <h2><img className="reviewer-img" src='r2.png' alt='Jane Smith' /></h2>
          <h3>Excellent Quality</h3>
          <p>The quality is top-notch and the service was fantastic. - Jane Smith</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      
       <img src='wnew1.png'alt=''></img>
        <Carousel.Caption>
         <h2><img className="reviewer-img" src='file.png' alt='Alex Johnson' /></h2>
          <h3>
            Value for Money
          </h3>
          <p>Definitely worth the price. Will buy again! - Alex Johnson</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
    );
};

export default Slide1;