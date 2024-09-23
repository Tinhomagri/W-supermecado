import React from 'react';
import './Header.css';  
import Logo from './imgs/GWlogo.png'; 

function Header() {
  return (
    <header className="header">
        <div>
            <img src={Logo} alt="Logo" className="logo" />
            <h1 className='nome'>W Delivery</h1>
        </div>
    </header>
  );
}

export default Header;

