import React, { useState } from 'react';
import fakeData from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Poroduct/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0,100);
    const [products, setProducts] = useState(first10,)
    const [cart, setCart] = useState([])

    const handleAddProduct = (product) =>{
        console.log(product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} handleAddProduct = {handleAddProduct}></Product>)
                }
            </div>
            <div className="card-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;