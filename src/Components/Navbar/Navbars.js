import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navbars.css'
const Navbars = () => {
    return (
        <div>
            <Navbar className='navbar' bg="light" variant="light">
                <Navbar.Brand href="#home">Nk Quiz compitition</Navbar.Brand>
                <Nav className="me-auto">

                    <Link to='/'>Home</Link>
                    <Link to='/topics'>Topics</Link>
                    <Link to='/statictics'>Statictics</Link>
                    <Link to='/blog'>Blog</Link>

                </Nav>
            </Navbar>
        </div>
    );
};

export default Navbars;