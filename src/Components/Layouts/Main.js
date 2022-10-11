import React from 'react';
import { Outlet } from 'react-router-dom'
import './Main.css'
import Navbars from '../Navbar/Navbars';



const Main = () => {
    return (
        <div>
            <Navbars></Navbars>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;