import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Navbars.css'
const Navbars = () => {
    return (
        <div>
            <Navbar className='fullNav'>
                <ul className=" all_link">
                    <div><h4 className='Heading'>Learn Free</h4></div>
                    <div className='navdiv-1'>
                        <li><NavLink className={({ isActive }) => isActive ? ' active' : undefined} to='/home'>Home</NavLink></li>
                        <li><NavLink to='/topics'>Topics</NavLink></li>
                        <li><NavLink to='/statictics'>Statictics</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                    </div>
                </ul>
            </Navbar >
        </div >
    );
};

export default Navbars;