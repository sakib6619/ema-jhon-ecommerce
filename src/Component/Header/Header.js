import React from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/menage">Manage Inventory</a>
                </nav>
        </div>
    );
};

export default Header;