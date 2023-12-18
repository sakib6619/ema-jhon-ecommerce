import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0);
    let shipping = 0;
    if(total >= 300){
        shipping = 0;
    }
    else if (total >= 200){
        shipping = 4.99;
    }
    else if(total >= 100){
        shipping = 9.99;
    }
    const tax = Math.round(total/50); // (total/40).toFixet(2) if use this convert in number
    return (
        <div>
            <h3>Order Summary</h3>
            <p>Order Summary: {cart.length}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax + VAT:${tax}</p>
            <p>Total Price: ${total + shipping + tax}</p>
            <button className='add-card-btn'><FontAwesomeIcon icon ={faShoppingCart}/>Order Now</button>
        </div>
    );
};

export default Cart;