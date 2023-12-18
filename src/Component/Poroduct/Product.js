import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    // console.log(props);
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={props.product.img} alt="" />
            </div>
            <div className='product-details'>
                <h3>{props.product.name}</h3>
                <p><small>By:{props.product.seller}</small></p>
                <h5>Price:${props.product.price}</h5>
                <p><small>Only {props.product.stock} left in stock - Order soon</small></p>
                <button className='add-card-btn'onClick={()=>{props.handleAddProduct(props.product)}} > <FontAwesomeIcon icon ={faShoppingCart}/> Add to card</button>
            </div>
        </div>
    );
};

export default Product;