import React from 'react';
import Home from '../Home/Home';

const Nav = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Topic', path: '/topic' },
        { id: 3, name: 'Stacics', path: '/home' },
        { id: 4, name: 'Blogs', path: '/home' },
    ]
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <li key={route.id}></li>)
                }
            </ul>
        </nav>
    );
};

export default Nav;