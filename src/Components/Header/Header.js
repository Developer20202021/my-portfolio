import React from 'react';
import './Header.css';


const Header = () => {



    return (
        <div  style={{
            backgroundColor:'#070640',
            marginTop:'-30px',
            padding:'20px'
        }}>

<nav className='pc-nav'>
	<a className='a' href="#home">Home</a>
	<a className='a' href="#about">About</a>
	<a className='a' href="#projects">Projects</a>
	<a className='a' href="#contact">Contact</a>
	<div class="animation start-home"></div>
</nav>


            
        </div>
    );
};

export default Header;