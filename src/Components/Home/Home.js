import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    const course = useLoaderData();
    const { data } = course;
    console.log(data[0])
    return (
        <div>
            <Header></Header>
            <h1 className='text-sky-400'>This is Home:{data.length}</h1>
        </div>
    );
};

export default Home;