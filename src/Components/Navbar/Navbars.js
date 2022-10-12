import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Navbars.css'
const Navbars = () => {
    return (
        <div>
            <Navbar className='fullNav'>
                {/* <Navbar.Brand href="#home">Nk Quiz compitition</Navbar.Brand> */}
                <div><h4 className='Heading'>Learn Free</h4></div>

                <div><ul className=" all_link">
                    <nav>
                        <NavLink className={({ isActive }) => isActive ? ' active' : undefined} to='/home'>Home</NavLink>
                        <NavLink to='/topics'>Topics</NavLink>
                        <NavLink to='/statictics'>Statictics</NavLink>
                        <NavLink to='/blog'>Blog</NavLink>
                    </nav>
                </ul></div>
            </Navbar >
        </div >
    );
};

export default Navbars;