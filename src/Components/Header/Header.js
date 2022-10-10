import React from 'react';
import './Header.css';
import hm from './Header-image.jpg'
const Header = () => {
    return (
        <div className='imgplustext'>
            {/* <img src='./Header-image.jpg' alt='Quiz' /> */}
            <img className='hm-img' src={hm} alt="Logo" />
            <h1>Hello Mango People, here is a free website to check your knowledge!!!For Free!!!</h1>
        </div>

    );
};

export default Header;