import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import QuizCategory from '../QuizCategory/QuizCategory';
import './Home.css'
import Statictics from '../Statictics/Statictics';
const Home = () => {
    const course = useLoaderData();
    const { data } = course;
    return (
        <div>
            <Header></Header>
            <h1 className='text-sky-400'>This is Home:{data.length}</h1>
            <div className='Category'>
                {
                    data.map(
                        single => <QuizCategory key={single.id} single={single}></QuizCategory>,
                    )
                }
            </div>
            {/* <div>
               
            </div> */}
        </div>
    );
};

export default Home;