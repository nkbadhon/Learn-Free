import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizCategory from '../QuizCategory/QuizCategory';
import './Topics.css'

const Topics = () => {
    const course = useLoaderData();
    const { data } = course;
    return (
        <div>
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

export default Topics;