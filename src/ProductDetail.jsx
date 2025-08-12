import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom';
import { products } from './products';
import icons from './assets/icons8-protein-50.png';
import profilepic from './assets/user.png'
import cart from './assets/shopping-cart.png'
import './ProductDetails.css'
import { useContext } from 'react';
import { CartContext } from './CartContext.jsx';
import { useNavigate } from 'react-router-dom';

function ProductDetail() {
  const navigate = useNavigate()
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) return <p>Product not found</p>;
  const [selectqty, setSelectqty] = useState('');
  const [selectdelivery, setSelectdelivery] = useState('');
  const [Totalprice, setTotalprice] = useState(0);
  function firstdelivery(){
    setSelectdelivery('4 weeks');
  }
  function seconddelivery(){
    setSelectdelivery('6 weeks');
  }
  function thirddelivery(){
    setSelectdelivery('8 weeks');
  }
  function firstquantity(){
    setSelectqty('4*400g');
    setTotalprice(4 * 400); // Assuming price is 400 per item
    alert('You have selected 4*400g');
  }
  function secondquantity(){
    setSelectqty('6*400g');
    setTotalprice(6 * 400); // Assuming price is 400 per item
    alert('You have selected 6*400g');
  }
  return (
    <div>
      <div className='items-header'>
        <ul className='items-header-ul'>
          <li>Shop</li>
          <li>Build a Bundle</li>
        </ul>
        <p>ELEAT</p>
        <ul className='items-header-ul'>
          <li>Reviews</li>
          <li>About</li>
          <li><img className='items-hed-img' src={profilepic} alt="" /></li>
          <li><img className='items-hed-img' src={cart} alt=''/></li>
        </ul>
      </div>
      <div className='items-container'>
        <div className='items-left'>
          <img className='items-left-img' src={product.image} alt={product.name}/>
        </div>
        <div className='items-right'>
          <h4><u>{product.name}</u></h4>
          <div className='items-right-div'>
            <div className='items-right-icon'>
              <img className='items-icon' src={icons} alt=''/>
              <p>20g protein per breakfast</p>
            </div>
            <div className='items-right-icon'>
              <img className='items-icon' src={icons} alt=''/>
              <p>100% Natural Ingredients</p>
            </div>
            <div className='items-right-icon'>
              <img className='items-icon' src={icons} alt=''/>
              <p>From £1.10 per 80g serving</p>
            </div>
          </div>
          <div className='form'>
            <h4><u>Select Favours- choose from the below radio buttons</u></h4>
            <div className="radio-group">
              <label className="radio-button">
                <input type="radio" name="option" value="one" defaultChecked/>
                <span className="custom-radio"></span>
                Overnight Oats Bestseller Variety
              </label>

              <label className="radio-button">
              <input type="radio" name="option" value="two"/>
              <span className="custom-radio"></span>
                Chocolate Protein Oats
              </label>

              <label className="radio-button">
              <input type="radio" name="option" value="three"/>
              <span className="custom-radio"></span>
                Mixed Berry Protein Oats
              </label>

              <label className="radio-button">
              <input type="radio" name="option" value="four"/>
              <span className="custom-radio"></span>
                Apple And Cinnamon Protein Oats
              </label>
            </div>
            <h4>Select Quantity: {selectqty && <span>{selectqty}</span>}</h4>
            <button className='btn-qty' onClick={firstquantity}>4*400g</button>
            <button className='btn-qty' onClick={secondquantity}>6*400g</button>
            <div className='delivery'>
              <h4>Delivery every: {selectdelivery && <span>{selectdelivery}</span>}</h4>
              <button onClick={firstdelivery} className='delivery-btn'>4 weeks</button>
              <button onClick={seconddelivery} className='delivery-btn'>6 weeks</button>
              <button onClick={thirddelivery} className='delivery-btn'>8 weeks</button>
            </div>
            <div className='items-right-price'>
              <div className='total'>
                <p>Subtotal:</p>
                <p>₹{Totalprice}</p>
              </div>
              <div className='total'>
                <p>Subscription Discount(20%):</p>
                <p>₹{(Totalprice * 0.2).toFixed(0)}</p>
              </div>
              <div className='total'>
                <p>Total:</p>
                <p>₹{(Totalprice * 0.8).toFixed(0)}</p>
              </div>
              <button
                  className='btn-add'
                  onClick={() => {
                  const selectedProduct = {
                   id: product.id,
                   name: product.name,
                   image: product.image,
                   quantity: selectqty,
                   delivery: selectdelivery,
                   subtotal: Totalprice,
                   total: (Totalprice * 0.8).toFixed(0)
                  };
                  addToCart(selectedProduct);
                  navigate('/cart')
                  }}>
                  Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
}
export default ProductDetail;