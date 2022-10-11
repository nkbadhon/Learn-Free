import React from 'react';
import Header from '../Header/Header';
import { useLoaderData } from 'react-router-dom';
import QuizCategory from '../QuizCategory/QuizCategory';
import './Home.css'
const Home = () => {
    const course = useLoaderData();
    const { data } = course;
    return (
        <div>
            <div className='headcls'>
                <Header></Header>

            </div>
            <div className='Category'>
                {
                    data.map(
                        single => <QuizCategory key={single.id} single={single}></QuizCategory>,
                    )
                }
            </div>
        </div>
    );
};

export default Home;