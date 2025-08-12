import React, { useState } from 'react'
import profilepic from './assets/user.png'
import cart from './assets/shopping-cart.png'
import video from './assets/video.mp4'
import oats from './assets/protien oats.webp'
import trustpilot from './assets/trustpilot-1.svg'
import fivestar from './assets/stars-5-1.svg'
import overnightoats from './assets/overnight oats.jpeg'
import justin from './assets/justin.jpeg'
import issy from './assets/issy.jpeg'
import holly from './assets/holly.jpg'
import james from './assets/james.jpeg'
import cereal from './assets/cereal.webp'
import granola from './assets/granola.jpeg'
import box from './assets/box.jpeg'
import elate1 from './assets/elate1.jpg'
import elate2 from './assets/elate2.jpg'
import elate3 from './assets/elate3.jpg'
import granola1 from './assets/granola1.jpg'
import granola2 from './assets/granola2.jpg'
import granola3 from './assets/granola3.jpg'
import cereal1 from './assets/cereal1.jpg'
import cereal2 from './assets/cereal2.jpg'
import cereal3 from './assets/cereal3.jpg'
import { useRef } from 'react'
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';
import './ProductDetail.jsx'
const products = [
  {
    id: 'Overnight Oats Variety Pack',
    name: 'Overnight Oats Variety Pack',
    category: 'Oats',
    price: '4*400g From £24.00',
    reviews: 1988,
    image: overnightoats,
  },
  {
    id: 'Banana and Almond Oats',
    name: 'Banana and Almond Oats',
    category: 'Oats',
    price: '4*400g From £24.00',
    reviews: 1988,
    image: elate1,
  },
  {
    id: 'Apple and Cinnamon Oats',
    name: 'Apple and Cinnamon Oats',
    category: 'Oats',
    price: '4*400g From £24.00',
    reviews: 1988,
    image: elate2,
  },
  {
    id: 'Vanilla Oats Delight',
    name: 'Vanilla Oats Delight',
    category: 'Oats',
    price: '4*400g From £24.00',
    reviews: 1340,
    image: elate3,
  },
  {
    id: 'Crunchy Granola Mix',
    name: 'Crunchy Granola Mix',
    category: 'Granola',
    price: '4*400g From £24.00',
    reviews: 1020,
    image: granola,
  },
  {
    id: 'Chocolate Hazelnut Granola',
    name: 'Chocolate Hazelnut Granola',
    category: 'Granola',
    price: '4*400g From £24.00',
    reviews: 1020,
    image: granola1,
  },
  {
    id: 'Berry Bliss Granola',
    name: 'Berry Bliss Granola',
    category: 'Granola',
    price: '4*400g From £24.00',
    reviews: 1020,
    image: granola2,
  },
  {
    id: 'Choco Granola Bars',
    name: 'Choco Granola Bars',
    category: 'Granola',
    price: '4*400g From £24.00',
    reviews: 920,
    image: granola3,
  },
  {
    id: 'Honey Almond Cereal',
    name: 'Honey Almond Cereal',
    category: 'Cereal',
    price: '4*400g From £24.00',
    reviews: 870,
    image: cereal3,
  },
  {
    id: 'Strawberry night Cereal',
    name: 'Strawberry night Cereal',
    category: 'Cereal',
    price: '4*400g From £24.00',
    reviews: 790,
    image: cereal1,
  },
  {
    id: 'Strawberry Morning Cereal',
    name: 'Strawberry Morning Cereal',
    category: 'Cereal',
    price: '4*400g From £24.00',
    reviews: 790,
    image: cereal2,
  },
  {
    id: 'Strawberry evening Cereal',
    name: 'Strawberry evening Cereal',
    category: 'Cereal',
    price: '4*400g From £24.00',
    reviews: 790,
    image: cereal3,
  },
];
const category=['Oats', 'Granola', 'Cereal'];

function Header(){
  const scrollRef1 = useRef(null);
  const scrollRef2 = useRef(null);

function scrollCards(ref, direction) {
  const container = ref.current;
  const scrollAmount = 320;

  if (container) {
    if (direction === 'left') {
      container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
}
const notify = (e) => {
    e.preventDefault();
    toast.success("Subscribed successfully!");
  };


  const [selectedcategory,setselectedcategory] = useState('Oats');
  const filteredProducts = products.filter((products) => products.category === selectedcategory);

  return (
    <>
    <div>
      <div className='header'>
        <ul className='header-ul'>
            <li>Shop</li>
            <li>Build a Bundle</li>
        </ul>
        <p>ELEAT</p>
        <ul className='header-ul'>
            <li>Reviews</li>
            <li>About</li>
            <li><img className='hed-img' src={profilepic} alt="" /></li>
            <li><img className='hed-img' src={cart} alt=''/></li>
        </ul>
      </div>
      <div className='small-container'>
        <video className='small-video' autoPlay loop muted>
        <source
            src={video}
            type="video/mp4"/>
        </video>
        <div className='small-content'>
          <h1>Breakfast Built To Go<br></br> The Distance</h1>
          <h3>High Protein. High Fibre. Low Sugar.</h3>
          <button>Get Started</button>
          <p>Join 100,000+ who made the switch</p>
        </div>
      </div>
      <div className='small-container2'>
        <p>As Seen In</p>
        <div className='small-content2'>
          <div className='item-slide'>
            <p>Men's Fitness</p>
            <p>Sheerlenx</p>
            <p>Men's Fitness</p>
            <p>Sheerlenx</p>
            <p>Women's Health</p>
            <p>Women's Running</p>
            <p>Dily Express</p>
            <p>Women's Health</p>
            <p>Women's Running</p>
          </div>
          <div className='item-slide'>
            <p>Men's Fitness</p>
            <p>Sheerlenx</p>
            <p>Men's Fitness</p>
            <p>Sheerlenx</p>
            <p>Women's Health</p>
            <p>Women's Running</p>
            <p>Dily Express</p>
            <p>Women's Health</p>
            <p>Women's Running</p>
          </div>
        </div>
      </div>
      <div className='small-container3'>
        <h4>Choose from our range of High Protein Breakfasts</h4>
        <p>Overnight oats. Cereal. Granola.</p>
        <div className='small-content3'>
          <div className='card'>
            <img className='card-img' src={oats} alt='profile picture'/>
            <h2 className='card-title'>Protien Oats</h2>
            <p className='card-text'>20g protien per meal</p>
            <Link to={`/product/protein-oats`}>
              <button className='card-btn'>Shop Now</button>
            </Link>
           </div>

           <div className='card'>
            <img className='card-img' src={cereal} alt='profile picture'/>
            <h2 className='card-title'>Protien Cereal</h2>
            <p className='card-text'>25g protien per meal</p>
            <Link to={`/product/protein-cereal`}>
              <button className='card-btn'>Shop Now</button>
            </Link>
           </div>

           <div className='card'>
            <img className='card-img' src={granola} alt='profile picture'/>
            <h2 className='card-title'>Protien granola</h2>
            <p className='card-text'>27g protien per meal</p>
            <Link to={`/product/protein-granola`}>
              <button className='card-btn'>Shop Now</button>
            </Link>
           </div>
           
           <div className='card'>
            <img className='card-img' src={box} alt='profile picture'/>
            <h2 className='card-title'>Build a Box</h2>
            <p className='card-text'>Mix And Match Your Favourites</p>
            <button className='card-btn'>Shop Now</button>
           </div>
        </div>
      </div>
      <div className='small-container4'>
        <h4>Trusted by 100,000+ customers to fuel their mornings</h4>
        <div className='small-content4'>
          <div className='start'>
            <h5>Excellent</h5>
            <img src={fivestar} alt='' className='fivestar'/>
            <p>Based on<u>4,100 reviews</u></p>
            <img src={trustpilot} alt='' className='trust-img'/>
          </div>
          <div className='card-scroll-wrapper'>
            <button className="scroll-btn left" onClick={() => scrollCards(scrollRef1, 'left')}>&lt;</button>
            <div className='card-wrapper' ref={scrollRef1}>
                <ul className='card-list'>
                  <li className='card-item'>
                    <img src={fivestar} alt='' className='fivestar'/>
                    <p className='title-p'>Best Cereal</p>
                    <p className='desc'>I cannot get enough of these products,I was<br></br> never a cereal fan but needed to up...</p>
                    <p className='name'>Nikki Bussy, 13 May</p>
                    <p className='end'>Showing our favourite reviews</p>
                  </li>
                  <li className='card-item'>
                    <img src={fivestar} alt='' className='fivestar'/>
                    <p className='title-p'>Best Cereal</p>
                    <p className='desc'>I cannot get enough of these products,I was<br></br> never a cereal fan but needed to up...</p>
                    <p className='name'>Nikki Bussy, 13 May</p>
                    <p className='end'>Showing our favourite reviews</p>
                  </li>
                  <li className='card-item'>
                    <img src={fivestar} alt='' className='fivestar'/>
                    <p className='title-p'>Best Cereal</p>
                    <p className='desc'>I cannot get enough of these products,I was<br></br> never a cereal fan but needed to up...</p>
                    <p className='name'>Nikki Bussy, 13 May</p>
                    <p className='end'>Showing our favourite reviews</p>
                  </li>
                  <li className='card-item'>
                    <img src={fivestar} alt='' className='fivestar'/>
                    <p className='title-p'>Best Cereal</p>
                    <p className='desc'>I cannot get enough of these products,I was<br></br> never a cereal fan but needed to up...</p>
                    <p className='name'>Nikki Bussy, 13 May</p>
                    <p className='end'>Showing our favourite reviews</p>
                  </li>
                  <li className='card-item'>
                    <img src={fivestar} alt='' className='fivestar'/>
                    <p className='title-p'>Best Cereal</p>
                    <p className='desc'>I cannot get enough of these products,I was<br></br> never a cereal fan but needed to up...</p>
                    <p className='name'>Nikki Bussy, 13 May</p>
                    <p className='end'>Showing our favourite reviews</p>
                  </li>
                  <li className='card-item'>
                    <img src={fivestar} alt='' className='fivestar'/>
                    <p className='title-p'>Best Cereal</p>
                    <p className='desc'>I cannot get enough of these products,I was<br></br> never a cereal fan but needed to up...</p>
                    <p className='name'>Nikki Bussy, 13 May</p>
                    <p className='end'>Showing our favourite reviews</p>
                  </li>
                </ul>
            </div>
            <button className="scroll-btn right" onClick={() => scrollCards(scrollRef1, 'right')}>&gt;</button>
          </div>
        </div>
      </div>
      <div className='product-page'>
        <div className='category-buttons'>
          {category.map((cat)=>(
            <button key={cat} className={`category-button ${selectedcategory === cat ? 'active' : ''}`} onClick={() => setselectedcategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <div className='product-list'>
          {filteredProducts.map((product) => (
            <div key={product.id} className='product-item'>
              <img src={product.image} alt={product.name} />
              <h5>{product.name}</h5>
              <p>{product.price}</p>
              <p>{product.reviews} reviews</p>
              <Link to={`/product/${product.id}`}>
                <button className='product-btn'>Shop Now</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className='small-container5'>
        <div className='small-content5'>
          <h4>Trusted by<br></br> the best</h4>
          <div className='small-content5-items'>
            <button className="scroll-btn left" onClick={() => scrollCards(scrollRef2, 'left')}>&lt;</button>
            <button className="scroll-btn right" onClick={() => scrollCards(scrollRef2, 'right')}>&gt;</button>
          </div>
        </div>
        <div className='box-list' ref={scrollRef2} >
          <div className='box'>
            <img src={justin} alt='' className='overnightoats'/>
            <h2 className='box-title'>Justin Knussi</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={issy} alt='' className='overnightoats'/>
            <h2 className='box-title'>Issy hill</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={holly} alt='' className='holly'/>
            <h2 className='box-title'>holly archer</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={james} alt='' className='overnightoats'/>
            <h2 className='box-title'>james morihen</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={issy} alt='' className='overnightoats'/>
            <h2 className='box-title'>issy hill</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={holly} alt='' className='holly'/>
            <h2 className='box-title'>holly archer</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={james} alt='' className='overnightoats'/>
            <h2 className='box-title'>James morihen</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={justin} alt='' className='overnightoats'/>
            <h2 className='box-title'>Justin Knussi</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
          <div className='box'>
            <img src={issy} alt='' className='overnightoats'/>
            <h2 className='box-title'>issy hill</h2>
            <p className='box-text'>PT & Crossfit Athelete</p>
            <p>ELEAT Lorem, ipsum dolor sit<br></br> amet consectetur adipisicing elit.<br></br> Obcaecati, incidunt. In esse <br></br> cumque ullam eligendi?</p>
          </div>
        </div>
      </div>
      <div className='footer'>
          <div className='footer-logo'>
            <div className='footer-content1'>
              <p>Get the low<br></br> down on all<br></br> things ELEAT!</p>
              <form>
              <input type='email' placeholder='Enter your email address' className='footer-input'/>
              <button onClick={notify} className='footer-btn'>Subscribe</button>     
              </form>   
              <ToastContainer position="top-center" />
            </div>
            <div className='footer-content2'>
          <h4>Explore</h4>
          <ul className='footer-ul'>
            <li>shop</li>
            <li>bild a bundle</li>
            <li>bimuno</li>
            <li>blogs</li>
            <li>student discount</li>
            <li>creator programme</li>
          </ul>
            </div>
            <div className='footer-content3'>
          <h4>Help</h4>
          <ul className='footer-ul'>
            <li>store locator</li>
            <li>become a stocklist</li>
            <li>FAQs</li>
            <li>your subscription</li>
            <li>contact</li>
          </ul>
            </div>
            <div className='footer-content4'>
          <h4>legal</h4>
          <ul className='footer-ul'>
            <li>returns policy</li>
            <li>terms of service</li>
            <li>privacy policy</li>
          </ul>
            </div>
            <div className='footer-content5'>
          <h4>Follow us</h4>
          <ul className='footer-ul'>
            <li>instagram</li>
            <li>facebook</li>
            <li>tiktok</li>
            <li>youtube</li>
          </ul>
            </div>
          </div>
            <div className='footer-content6'>
              <p className='p-text'>Copyright 2025 ELEAT.Site by Tribe.studio</p>
            </div>
      </div>

    </div>
    </>

  )
}

export default Header
