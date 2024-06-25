
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slides.css'
const Slides = () => {
    return (
      <div id='service'>
        <div className='style'>
             <Carousel>
      <Carousel.Item>
        <div className='sl-1'>
        <img  src="fss1.png" alt=''></img>
        
       <div class="Textc">
        
        This is Shirt with good quality and awesomeness for the first. 
        This shirt features a classic red and navy blue plaid pattern, providing a bold yet timeless look.
         It's tailored for a modern fit with a button-down design, ideal for casual wear. 
         The long sleeves are rolled up, adding to the relaxed vibe. Made from likely soft, breathable material, it ensures comfort. Layered over a white t-shirt, it offers a stylish, laid-back appearance. This shirt suits casual outings, workplaces with a relaxed dress code, and layering for cooler weather. Pair it with jeans or chinos, and complement with sneakers or casual boots. A versatile addition to any casual wardrobe.</div>
       </div>
      
      </Carousel.Item>
      <Carousel.Item>
        <div className='sl-2'>
        <img src='fsts1.png'alt=''></img>
        <div class="Textc">
        This tshirt is a sleek, fitted polo in a rich burgundy color, perfect for a polished yet casual look. It features a contrasting black collar and sleeve trim, adding a modern touch to its design. The black button placket and a single black accent on the chest pocket enhance its stylish details. Crafted from a smooth, likely stretchy fabric, it provides both comfort and a sharp silhouette. Ideal for smart-casual events, it can be paired with tailored trousers or dark jeans. The shirt's minimalist design and deep color make it versatile for evening outings or semi-formal settings. It's a refined choice for those looking to elevate their casual wardrobe with a sophisticated edge.</div>
        </div>
      
        <Carousel.Caption>
    
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='sl-3'>
        <img src='watch3.png'></img>
        <div class="Textc">This watch is a luxurious gold timepiece encrusted with intricate, shimmering gemstones. The face features a dazzling concentric pattern of diamonds, enhancing its opulent look. With a robust gold bezel and a bracelet strap adorned with additional gemstones, it exudes a regal aura. The polished gold casing and detailed craftsmanship signify premium quality and attention to detail. The bold, sparkling design makes it ideal for special occasions, adding a touch of glamour to any outfit. This watch not only tells time but also serves as a statement of elegance and sophistication. Perfect for those who appreciate high-end accessories with a striking, eye-catching appeal.</div>
        </div>
       
        
      </Carousel.Item>
    </Carousel>
        </div>
        </div>
    );
};

export default Slides;