// Navbar.js

import React from 'react';
import '../Components/Navbar.css'; // Import the CSS file for stypng
import logo from '../assets/logoplaynino.png'
import profile from '../assets/profile.png'
import cart from '../assets/cart.png'


const Navbar = () => {
  return (
    <nav className="navbar">
      <div ><img className="logoplay"src={logo}></img></div>
      <p className="nav-links">
        <a href="#home" style={{color:'black'}}>Section 1</a>
        <a href="#services" style={{color:'black'}}>Section 2</a>
        <a href="#about" style={{color:'black'}}>Section 3</a>
        <a href="#contact"><button style={{backgroundColor:'red', borderRadius:'5px', border:'none', color:'white'}}>Shop</button></a>
        <a href="#services" style={{color:'black'}}>Blog</a>
        <a href="#contact">Sign Up</a>
        <a href="#services"><button style={{backgroundColor:'blue', borderRadius:'5px', border:'none', color:'white'}}>Log In</button></a>
      </p>
      <div ><img className="profile"src={profile}></img></div>
      <div ><img className="cart"src={cart}></img></div>
    </nav>
  );
};

export default Navbar;
