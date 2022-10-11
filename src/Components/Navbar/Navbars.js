import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbars.css'
const Navbars = () => {
    return (
        <div>
            <Navbar className='Abcd'>
                {/* <Navbar.Brand href="#home">Nk Quiz compitition</Navbar.Brand> */}
                <div><h4>Learn Free</h4></div>

                <div><ul className=" abcde">
                    <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statictics'>Statictics</Link>
                    <Link to='/blog'>Blog</Link>
                </ul></div>
            </Navbar>
        </div>
    );
};

export default Navbars;